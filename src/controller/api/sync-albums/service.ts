import { logger } from '../../core/config.js';
import { TrackMetadata } from '../../core/types.js';
import { readAlbum, supportsFile, writeAlbum } from '../../managers/id3.js';
import { createMetadataObject } from '../../managers/metadataResolver.js';
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
    tracksUnmatched: 0,
    filesMatched: 0,
    filesUpdated: 0,
    filesUnchanged: 0,
    filesSkipped: 0,
  };

  for (const [normalizedName, tracks] of input.fileManager.tracks) {
    const candidates = input.tracks.get(normalizedName) ?? [];
    if (candidates.length === 0) {
      summary.tracksUnmatched += tracks.length;
      summary.filesSkipped += tracks.length;
      continue;
    }

    for (const fileTrack of tracks) {
      const filePath = fileTrack.filePath;
      const track = selectTrackForVariant(candidates, fileTrack.variant);

      if (!track) {
        logger.warn({ normalizedName, filePath, variant: fileTrack.variant }, 'No CSV track match for file variant');
        summary.tracksUnmatched += 1;
        summary.filesSkipped += 1;
        continue;
      }

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

function selectTrackForVariant(candidates: TrackMetadata[], fileVariant: string): TrackMetadata | undefined {
  const normalizedFileVariant = normaliseVariant(fileVariant);

  const exact = candidates.find((candidate) => normaliseVariant(candidate.variant) === normalizedFileVariant);
  if (exact) {
    return exact;
  }

  const baseline = candidates.find((candidate) => normaliseVariant(candidate.variant) === 'baseline');
  if (baseline) {
    return baseline;
  }

  return candidates[0];
}

function normaliseVariant(value: string): string {
  const normalized = value.trim().toLowerCase();
  if (!normalized || normalized === 'looping' || normalized === 'extended cut') {
    return 'baseline';
  }
  return normalized;
}