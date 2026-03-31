import { logger, plex } from "../../core/config.js";

export async function syncPlexTagsHandler(commit: boolean) {
  const library = await plex.getSectionById(1);
  const summary = {
      added: 0,
      removed: 0,
      updated: 0,
      errors: 0,
  }
  logger.info({ library }, 'Fetched Plex library section');
  return {
    library,
    summary,
  }
}