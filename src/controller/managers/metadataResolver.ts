import type { TrackMetadata } from "../core/types.js";
import path from 'path';

/**
 * Creates an intended update for the track if the track's album is out of date.
 * @param track The track we want to consider updating the album metadata of.
 * @param filePath The filepath where the track exists. Used to find the album it has been sorted to.
 * @returns A potential update for the metadata object. 
 */
export function createMetadataObject(track: TrackMetadata, filePath: string) {
  return {...track, album: getTrackAlbumName(track, filePath)}
}
/**
 * Checks which fields in the track's metadata has been updated. Helps identify and log 
 * when a track needs to be updated.
 * @param originalTrack The original track we want to compare with potential updates
 * @param intendedTrack The potentially updated track we want to compare with
 */
export function compareMetaDataObjects<T extends Record<string, any>>(
  original: T,
  intended: T
): Partial<T> {
  const updates: Partial<T> = {};

  for (const key of Object.keys(original) as (keyof T)[]) {
    if (original[key] !== intended[key]) {
      updates[key] = intended[key];
    }
  }

  return updates;
}
/**
 * 
 * @param track The track to update
 * @param filePath The file location to update
 * @returns the name of the album.
 * 
 * This checks whether the track's foundry module or album gives any valuable name.
 * If none are presented, the track's album name should be the folder it belongs in.
 */
function getTrackAlbumName(
  track: TrackMetadata,
  filePath: string
): string {
  if (track.foundryModule && track.foundryModule !== 'None') {
    return track.foundryModule;
  }

  if (track.album && track.album !== 'None') {
    return track.album;
  }
  return path.basename(path.dirname(filePath));
}