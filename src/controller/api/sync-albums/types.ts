import type { TrackMetadata } from "../../core/types.js";
import type { FileManager } from "../../managers/files.js";

export interface SyncAlbumInput {
  tracks: TrackMetadata[];
  fileManager: FileManager;
  commit: boolean;
}

export interface SyncAlbumSummary {
  tracksRead: number;
  tracksUnmatched: number;
  filesMatched: number;
  filesUpdated: number;
  filesUnchanged: number;
  filesSkipped: number;
}