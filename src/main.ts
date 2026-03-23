import { logger } from './controller/core/config.js';
import Fastify from 'fastify';
import { syncAlbumHandler } from './controller/api/sync-albums/orchestrator.js';
import { setTitlesHandler } from './controller/api/set-titles/orchestrator.js';
import { syncPlexTagsHandler } from './controller/api/sync-plex-tags/orchestrator.js';

const fastify = Fastify({
});

fastify.get('/health', async (request, reply) => {
  return { status: 'ok' };
});

interface Queryparams {
  commit?: string;
}
fastify.post("/sync-albums", async (request, reply) => {
  try {
    const { commit } = request.query as Queryparams;
    logger.info( commit === 'true' ? 'Committing changes' : 'Performing dry run');

    const summary = syncAlbumHandler(commit === 'true');

    reply.send({ summary });
  } catch (err) {
    logger.error({ err }, 'Error syncing albums');
    reply.status(500).send({ error: 'Error syncing albums' });
    return;
  }
});

fastify.post("/set-titles", async (request, reply) => {
  try {
    const { commit } = request.query as Queryparams;
    logger.info( commit === 'true' ? 'Committing title changes' : 'Performing dry run for title changes');

    const summary = setTitlesHandler(commit === 'true');
    reply.send({ summary });
  } catch (err) {
    logger.error({ err }, 'Error setting titles');
    reply.status(500).send({ error: 'Error setting titles' });
    return;
  }
});

fastify.post("/sync-plex-tags", async (request, reply) => {
  try {
    const { commit } = request.query as Queryparams;
    logger.info( commit === 'true' ? 'Committing Plex tag changes' : 'Performing dry run for Plex tag changes');
    const summary = await syncPlexTagsHandler(commit === 'true');
    logger.info({ summary }, 'Plex tag sync summary');
    reply.send({ summary });
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