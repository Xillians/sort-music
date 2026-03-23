import { logger } from "../../core/config.js";
import type { FileManager } from "../../managers/files.js";
import { readFileName, readTitle, writeTitle } from "../../managers/id3.js";
import type { SetTitlesSummary } from "./types.js";

export function updateTitles(commit: boolean, fileList: FileManager): SetTitlesSummary {
  const summary: SetTitlesSummary = {
    tracksRead: 0,
    filesUpdated: 0,
    filesUnchanged: 0,
    failed: 0,
  };

  // For each file, read the ID3 title and compare the file name with the title. If they differ, update the title to match the file name.
  fileList.files.forEach((filePaths) => {
    for (const filePath of filePaths) {
      summary.tracksRead += 1;

      const result = processFile(filePath, commit);
      if (result.validation === 'changed') {
        summary.filesUpdated += 1;
      } else if (result.validation === 'unchanged') {
        summary.filesUnchanged += 1;
      } else if (result.validation === 'error') {
        summary.failed += 1;
      }
    }
  });

  return summary;
}
function processFile(filePath: string, commit: boolean) {
  const fileName = readFileName(filePath);
  const currentTitle = readTitle(filePath);
  // trim file extension from file name for comparison
  const ext = fileName.lastIndexOf('.');
  const baseName = ext !== -1 ? fileName.slice(0, ext) : fileName;

  if (baseName === currentTitle) {
    return { validation: 'unchanged' };
  }
  if(!commit) {
    logger.info({ filePath, currentTitle, newTitle: baseName }, 'Would update title (dry run)');
    return { validation: 'changed' };

  }
  const success = writeTitle(filePath, baseName);
  if (success) {
    logger.info({ filePath, currentTitle, newTitle: baseName }, 'Updated title');
    return { validation: 'changed' };
  } else {
    logger.error({ filePath, currentTitle, newTitle: baseName }, 'Failed to update title');
    return { validation: 'error' };
  }
}