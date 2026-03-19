import {CSVManager } from './controller/csv.js';
import { FileManager } from './controller/files.js';
import {config, logger} from './controller/config.js';
import { syncAlbumTags } from './controller/syncAlbums.js';

  /**
   * steps:
   * 1. get config data.
   * 2. fetch all files from ./controller/soundtracks/Music d20 Everything Bundle/Themes/Playlists
   * 3. Read csv from ./controller/soundtracks
   * 4. Process meta tags like genre name, album, and tags
   * 5. For all songs with album name "None", read the name of the playlist directory the song exists under and apply that as the album name
   */
function main(): void {
  if (config.isDryrun()) {
    logger.info('Running dry run');
  } 
  logger.info("running main");

  const fileList = FileManager.fromDirectory();
  const csv = CSVManager.fromFile();

  const summary = syncAlbumTags({
    tracks: csv.tracks,
    fileManager: fileList,
    dryRun: config.isDryrun(),
  });

  logger.info({ summary }, 'Album sync run complete');
}

main();