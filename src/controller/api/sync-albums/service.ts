import { logger } from '../../core/config.js';
import type { FileManager } from '../../managers/files.js';
import { readAlbum, supportsFile, writeAlbum } from '../../managers/id3.js';
import { createMetadataObject } from '../../managers/metadataResolver.js';
import { matchTracks } from '../../managers/trackMatcher.js';
import type { TrackMetadata } from '../../core/types.js';
import type { SyncAlbumInput, SyncAlbumSummary } from './types.js';


/**
 * Synchronizes album tags for a list of tracks with the corresponding files in the target directory.
 * @param tracks - The list of track metadata objects parsed from the CSV file.
 * @param fileManager - An instance of FileManager that provides access to the files in the target directory.
 * @param commit - A boolean flag indicating whether to actually write changes to the files (true) or perform a dry run (false).
 * @returns A summary object containing counts of tracks read, unmatched tracks, files matched, updated, unchanged, and skipped.
 */
export function syncAlbumTags(input: SyncAlbumInput): SyncAlbumSummary {
  const summary: SyncAlbumSummary = {
    tracksRead: input.tracks.length,
    tracksUnmatched: 0,
    filesMatched: 0,
    filesUpdated: 0,
    filesUnchanged: 0,
    filesSkipped: 0,
  };

  for (const [normalizedName, filePaths] of input.fileManager.files) {
    const matches = input.tracks.filter(
      track => matchTracks(track, input.fileManager).length > 0 &&
        // IMPORTANT: match by normalized name instead
        normalizedName === input.fileManager.normaliseName(track.title)
    );

    if (matches.length === 0) {
      summary.tracksUnmatched += 1;
      continue;
    }

    if (matches.length > 1) {
      logger.warn({ normalizedName, matches }, 'Ambiguous match, skipping');
      summary.filesSkipped += filePaths.length;
      continue;
    }

    const track = matches[0];

    if (!track) {
      summary.filesSkipped += filePaths.length;
      continue;
    }

    for (const filePath of filePaths) {
      summary.filesMatched += 1;

      if (!supportsFile(filePath)) {
        summary.filesSkipped += 1;
        continue;
      }

      const intended = createMetadataObject(track, filePath);
      const targetAlbum = intended.album.trim();

      if (!targetAlbum) {
        summary.filesSkipped += 1;
        continue;
      }

      const currentAlbum = readAlbum(filePath);

      if (currentAlbum === targetAlbum) {
        summary.filesUnchanged += 1;
        continue;
      }

      if (!input.commit) {
        summary.filesUpdated += 1;
        continue;
      }

      const success = writeAlbum(filePath, targetAlbum);

      if (success) {
        summary.filesUpdated += 1;
      } else {
        summary.filesSkipped += 1;
      }
    }
  }

  return summary;
}