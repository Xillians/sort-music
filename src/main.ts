import {CSVManager } from './controller/csv.js';
import { FileManager } from './controller/files.js';
import {config, logger} from './controller/config.js';
import { syncAlbumTags } from './controller/syncAlbums.js';
import Fastify from 'fastify';

const fastify = Fastify({
});

fastify.get('/health', async (request, reply) => {
  return { status: 'ok' };
});

interface Queryparams {
  dryRun?: boolean;
}

fastify.post("/sync-albums", async (request, reply) => {
  try {
    const { dryRun } = request.query as Queryparams;
    logger.info('Received request to sync albums');
    
    const fileList = FileManager.fromDirectory();
    const csv = CSVManager.fromFile();
    logger.debug({ 
      fileCount: Array.from(fileList.files).length, 
      trackCount: csv.tracks.length 
    }, 'Fetched files and CSV data');

    const summary = syncAlbumTags({
      tracks: csv.tracks,
      fileManager: fileList,
      dryRun: dryRun ?? false
    });

    logger.info({ summary }, 'Album sync run complete');
    reply.send({ summary });

  } catch (err) {
    logger.error({ err }, 'Error syncing albums');
    reply.status(500).send({ error: 'Error syncing albums' });
    return;
  }
});

const start = async () => {
  try {
    logger.info('Starting server');
    await fastify.listen({ port: 3000 });
  }
  catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();