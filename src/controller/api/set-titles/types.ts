import type { TrackMetadata } from "../../core/types.js";
import type { FileManager } from "../../managers/files.js";

export interface SetTitlesInput {
  tracks: TrackMetadata[];
  fileManager: FileManager;
  commit: boolean;
}

export interface SetTitlesSummary {
  tracksRead: number;
  filesUpdated: number;
  filesUnchanged: number;
  failed: number;
}