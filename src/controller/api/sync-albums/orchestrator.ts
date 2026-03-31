import { logger } from '../../core/config.js';
import { CSVManager } from '../../managers/csv.js';
import { FileManager } from '../../managers/files.js';
import { syncAlbumTags } from './service.js';
import type { SyncAlbumSummary } from './types.js';

export function syncAlbumHandler(commit: boolean): SyncAlbumSummary {
  logger.info('Received request to sync albums');

  const fileList = FileManager.fromDirectory();
  const csv = CSVManager.fromFile();
  logger.debug({
    fileCount: Array.from(fileList.tracks).length,
  }, 'Fetched files and CSV data');

  return syncAlbumTags({
    tracks: csv.tracks,
    fileManager: fileList,
    commit: commit
  });
}