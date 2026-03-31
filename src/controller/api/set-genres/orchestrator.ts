import { logger } from "../../core/config.js";
import { CSVManager } from "../../managers/csv.js";
import { FileManager } from "../../managers/files.js";
import { setGenres } from "./service.js";
import type { SetGenresSummary } from "./types.js";

export function setGenresHandler(commit: boolean): SetGenresSummary {
  logger.info('Received request to update genres');
  
  const csv = CSVManager.fromFile();
  const fileList = FileManager.fromDirectory();
  logger.debug({
    fileCount: Array.from(fileList.files).length,
  }, 'Fetched files.');

  return setGenres(commit, fileList, csv);
}