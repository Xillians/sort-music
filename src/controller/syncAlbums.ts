import { logger } from './config.js';
import type { FileManager } from './files.js';
import { readAlbum, supportsFile, writeAlbum } from './id3.js';
import { createMetadataObject } from './metadataResolver.js';
import { matchTracks } from './trackMatcher.js';
import type { TrackMetadata } from './types.js';

export interface SyncAlbumInput {
  tracks: TrackMetadata[];
  fileManager: FileManager;
  dryRun: boolean;
}

export interface SyncAlbumSummary {
  tracksRead: number;
  tracksUnmatched: number;
  filesMatched: number;
  filesUpdated: number;
  filesUnchanged: number;
  filesSkipped: number;
}

/**
 * 
 * @param tracks - The list of track metadata objects parsed from the CSV file.
 * @param fileManager - An instance of FileManager that provides access to the files in the target directory.
 * @param dryRun - A boolean flag indicating whether to perform a dry run (true) or actually write changes to the files (false).
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

  for (const track of input.tracks) {
    const matches = matchTracks(track, input.fileManager);
    if (matches.length === 0) {
      summary.tracksUnmatched += 1;
      continue;
    }

    for (const filePath of matches) {
      summary.filesMatched += 1;

      if (!supportsFile(filePath)) {
        summary.filesSkipped += 1;
        logger.debug({ filePath }, 'Skipping non-ID3 file');
        continue;
      }

      const intended = createMetadataObject(track, filePath);
      const targetAlbum = intended.album.trim();

      if (!targetAlbum) {
        summary.filesSkipped += 1;
        logger.warn({ filePath, title: track.title }, 'Skipping because target album is empty');
        continue;
      }

      const currentAlbum = readAlbum(filePath);
      if (currentAlbum === targetAlbum) {
        summary.filesUnchanged += 1;
        continue;
      }

      if (input.dryRun) {
        summary.filesUpdated += 1;
        logger.info(
          { filePath, currentAlbum, targetAlbum },
          'Dry-run: album tag would be updated'
        );
        continue;
      }

      const success = writeAlbum(filePath, targetAlbum);
      if (success) {
        summary.filesUpdated += 1;
        logger.info({ filePath, currentAlbum, targetAlbum }, 'Album tag updated');
      } else {
        summary.filesSkipped += 1;
        logger.warn({ filePath, targetAlbum }, 'Failed to update album tag');
      }
    }
  }
  return summary;
}