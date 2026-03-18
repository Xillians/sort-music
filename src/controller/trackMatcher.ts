import type { FileManager } from "./files.js";
import type { TrackMetadata } from "./types.js";

/**
 * 
 * @param track The specific track from the csv file to find in the file manager's list
 * @param fileManager 
 */
export function matchTracks(
  track: TrackMetadata,
  fileManager: FileManager
): string[] {
  const normalisedName = fileManager.normaliseName(track.title);
  return fileManager.files.get(normalisedName) ?? [];
}