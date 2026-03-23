import { LibraryService} from '../../managers/plex-open-api/services/LibraryService';

export async function syncPlexTagsHandler(commit: boolean) {
  const sections = await LibraryService.getSections();
  return { sections };
}