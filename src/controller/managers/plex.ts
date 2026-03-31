import { XMLParser } from 'fast-xml-parser';
import { logger } from '../core/config.js';

export class PlexManager {
  private baseUrl: string;
  private token: string;

  constructor(baseUrl: string, token: string) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  public async getSectionById(id: number): Promise<PlexSectionResponse> {
    logger.info({ id, baseurl: this.baseUrl }, `Fetching Plex section with id ${id}`);
    const url = new URL(`/library/sections/${id}/all`, this.baseUrl);
    url.searchParams.append('X-Plex-Token', this.token);
    url.searchParams.append('type', '10'); // type 10 is for music, see https://support.plex.tv/articles/200288586-what-is-each-media-type/
    logger.debug({ url: url.toString() }, `Fetching Plex section with id ${id}`);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch section with id ${id}: ${response.statusText}`);
    }
    // response body is XML, so we need to parse it. Typed output is PlexSectionResponse
    const text = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '',
    });
    const json: PlexSectionResponse = parser.parse(text);
    return json;
  }
}
export interface PlexSectionResponse {
  MediaContainer: PlexMediaContainer;
}
interface PlexMediaContainer {
  size: number;
  allowSync: number;
  art: string;
  identifier: string;
  librarySectionID: number;
  librarySectionTitle: string;
  librarySectionUUID: string;
  mediaTagPrefix: string;
  mediaTagVersion: number;
  nocache: number;
  thumb: string;
  title1: string;
  title2: string;
  viewGroup: string;
  viewMode: number;
  Track: PlexMediaTrack[];
}

interface PlexMediaTrack {
  ratingKey: number;
  key: string;
  parentRatingKey: number;
  grandparentRatingKey: number;
  guid: string;
  parentGuid: string;
  grandparentGuid: string;
  type: string;
  title: string;
  grandparentKey: string;
  parentKey: string;
  grandparentTitle: string;
  parentTitle: string;
  originalTitle: string;
  summary: string;
  parentIndex: number;
  viewCount: number;
  lastViewedAt: number;
  parentYear: number;
  duration: number;
  addedAt: number;
  Media: MediaContainer[];
}
interface MediaContainer {
  id: number;
  duration: number;
  bitrate: number;
  audioChannels: number;
  audioCodec: string;
  container: string;
  hasVoiceActivity: number;
  Part: MediaPart[];
}
interface MediaPart {
  id: number;
  key: string;
  duration: number;
  file: string;
  size: number;
  container: string;
}