import { logger } from "../../core/config.js";
import { FileManager } from "../../managers/files.js";
import { updateTitles } from "./service.js";
import type { SetTitlesSummary } from "./types.js";

export function setTitlesHandler(commit: boolean): SetTitlesSummary {
  logger.info('Received request to update titles');

  const fileList = FileManager.fromDirectory();
  logger.debug({
    fileCount: Array.from(fileList.files).length,
  }, 'Fetched files.');

  return updateTitles(commit, fileList);
}