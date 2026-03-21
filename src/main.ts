import { logger } from './controller/core/config.js';
import Fastify from 'fastify';
import { syncAlbumHandler } from './controller/api/sync-albums/orchestrator.js';

const fastify = Fastify({
});

fastify.get('/health', async (request, reply) => {
  return { status: 'ok' };
});

interface Queryparams {
  dryRun?: string;
}
fastify.post("/sync-albums", async (request, reply) => {
  try {
    const { dryRun } = request.query as Queryparams;
    const summary = syncAlbumHandler(dryRun === 'true');
    reply.send({ summary });
  } catch (err) {
    logger.error({ err }, 'Error syncing albums');
    reply.status(500).send({ error: 'Error syncing albums' });
    return;
  }
});

fastify.post("/set-titles", async (request, reply) => {
  try {
    logger.info('Received request to set titles');
    reply.status(501).send({ error: 'Title setting not implemented yet' });
    return;
  } catch (err) {
    logger.error({ err }, 'Error setting titles');
    reply.status(500).send({ error: 'Error setting titles' });
    return;
  }
});

fastify.post("/sync-plex-tags", async (request, reply) => {
  try {
    logger.info('Received request to sync Plex tags');
    reply.status(501).send({ error: 'Plex tag syncing not implemented yet' });
    return;
  } catch (err) {
    logger.error({ err }, 'Error syncing Plex tags');
    reply.status(500).send({ error: 'Error syncing Plex tags' });
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