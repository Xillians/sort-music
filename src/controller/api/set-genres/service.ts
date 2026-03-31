import NodeID3 from "node-id3";
import { logger } from "../../core/config.js";
import { FileManager } from "../../managers/files.js";
import { SetGenresSummary } from "./types.js";
import { CSVManager } from "../../managers/csv.js";
import { TrackMetadata } from "../../core/types.js";

const GENRE_SEPARATOR = '; ';

export function setGenres(commit: boolean, fileList: FileManager, csv: CSVManager): SetGenresSummary {
  const summary: SetGenresSummary = {
    totalFiles: 0,
    updatedFiles: 0,
    unchangedFiles: 0,
    failed: 0,
  };
  for (const [normalisedName, tracks] of fileList.tracks) {
    if (tracks.length === 0) {
      continue;
    }

    summary.totalFiles += tracks.length;

    for (const fileTrack of tracks) {
      const filePath = fileTrack.filePath;
      const csvTrack = selectTrackForVariant(csv.tracks.get(normalisedName) ?? [], fileTrack.variant);
      if (!csvTrack) {
        logger.warn({ normalisedName, filePath, variant: fileTrack.variant }, 'No CSV track match for file variant');
        summary.failed += 1;
        continue;
      }

      const ok = updateFileGenre(filePath, csvTrack.tags, commit);
      if (ok === 'unchanged') {
        summary.unchangedFiles += 1;
      } else if (ok === 'failed') {
        summary.failed += 1;
      } else {
        summary.updatedFiles += 1;
      }

    }
  }
  return summary;
} 
function updateFileGenre(file: string, genres: string[], commit: boolean = false): 'updated' | 'unchanged' | 'failed' {
  try {
    if (genres.length === 0) {
      logger.debug({ file }, 'No genres found, skipping update');
      return 'unchanged';
    }
    logger.debug({ file, genres }, 'Found genres to update');
    if (commit) {
      const success = NodeID3.update({ genre: genres.join(GENRE_SEPARATOR ) }, file);
      if (!success) {
        logger.error({ file }, 'Failed to update genres in ID3 tags');
        return 'failed';
      }
      logger.debug({ file }, 'Successfully updated genres in ID3 tags');
    } else {
      logger.debug({ file }, 'Dry run - not updating genres in ID3 tags');
    }
  } catch (error) {
    logger.error({ file, error }, 'Failed to update genres for file');
    return 'failed';
  }
  return 'updated';
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