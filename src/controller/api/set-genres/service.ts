import NodeID3 from "node-id3";
import { logger } from "../../core/config.js";
import { FileManager } from "../../managers/files.js";
import { SetGenresSummary } from "./types.js";
import { CSVManager } from "../../managers/csv.js";

export function setGenres(commit: boolean, fileList: FileManager, csv: CSVManager): SetGenresSummary {
  const summary: SetGenresSummary = {
    totalFiles: 0,
    updatedFiles: 0,
    unchangedFiles: 0,
    failed: 0,
  };
  for (const [normalisedName, files] of fileList.files) {
    if (files.length === 0) {
      continue;
    }

    summary.totalFiles += files.length;

    for (const file of files) {
      logger.debug({ normalisedName, file }, 'Processing file for genre update');
      for (const track of csv.tracks) {
        logger.debug({ trackTitle: track.title }, 'Checking against CSV track');
      }
      const csvTrack = csv.tracks.find(track => track.title === normalisedName);
      if (!csvTrack) {
        logger.warn({ file }, 'No matching track found in CSV, skipping file');
        summary.unchangedFiles += 1;
        continue;
      }

      const ok = updateFileGenre(file, csvTrack.tags, commit);
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
/**
 * 
 * Updates the genre tags of a music file. It uses the id3 
 * genre string to determine the genres to set. If the genre string is empty, it will skip updating the file.
 * 
 * The file will be updated using the array of genres and joining them with a null character, which is 
 * one of standard ways to separate multiple genres in ID3 tags.
 * 
 * @param file the filepath to update
 * @returns state whether file updated OK or if something failed.
 * 
 */
function updateFileGenre(file: string, genres: string[], commit: boolean = false): 'updated' | 'unchanged' | 'failed' {
  try {
    if (genres.length === 0) {
      logger.debug({ file }, 'No genres found, skipping update');
      return 'unchanged';
    }
    logger.debug({ file, genres }, 'Found genres to update');
    if (commit) {
      const success = NodeID3.update({ genre: genres.join('/') }, file);
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