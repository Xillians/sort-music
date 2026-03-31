
import fs from 'fs';
import path from 'path';

export interface FileTrack {
  filePath: string;
  variant: string;
}

export class FileManager {
  public readonly files: Map<string, string[]>
  public readonly tracks: Map<string, FileTrack[]>;
  constructor(filePath: string) {
    this.files = new Map<string, string[]>();
    this.tracks = new Map<string, FileTrack[]>();
    const trackList = this.getAllFiles(filePath);

    trackList.forEach(track => {
      const normalisedName = this.normaliseName(path.basename(track));
      const variant = this.extractVariant(path.basename(track));

      if (this.files.has(normalisedName)) {
        this.files.get(normalisedName)?.push(track);
      } else {
        this.files.set(normalisedName, [track]);
      }

      const existingTracks = this.tracks.get(normalisedName) ?? [];
      existingTracks.push({ filePath: track, variant });
      this.tracks.set(normalisedName, existingTracks);
    });
  }
  /**
 * Get all audio files from a directory recursively
 */
  private getAllFiles(dir: string): string[] {
    const files: string[] = [];
    if (!fs.existsSync(dir)) return files;

    for (const item of fs.readdirSync(dir)) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath));
      } else if (/\.(mp3|wav|ogg|m4a)$/i.test(item)) {
        files.push(fullPath);
      }
    }

    return files;
  }
  public static fromDirectory(filePath?: string): FileManager {
    const defaultPath = path.join(process.cwd(), 'src', 'soundtracks', 'Music d20 Everything Bundle', 'Themes');
    return new FileManager(filePath ?? defaultPath)
  }
  /**
   * Normalize song name for matching
   */
  public normaliseName(fileName: string): string {
    return fileName
      .replace(/\.(mp3|wav|ogg|m4a)$/i, '')
      .replace(/\s*\(looping\)/i, '')
      .replace(/\s*\(extended cut\)/i, '')
      .replace(/\s*\(.*?\)/g, '')
      .trim()
      .toLowerCase();
  }

  public extractVariant(fileName: string): string {
    const withoutExtension = fileName.replace(/\.(mp3|wav|ogg|m4a)$/i, '');
    const parentheticalParts = Array.from(withoutExtension.matchAll(/\(([^)]+)\)/g))
      .map((match) => match[1].trim())
      .filter(Boolean);

    const meaningfulParts = parentheticalParts
      .filter((part) => !/^(looping|extended cut)$/i.test(part));

    if (meaningfulParts.length === 0) {
      return 'baseline';
    }

    return meaningfulParts.join(' ').replace(/\s+/g, ' ').trim().toLowerCase();
  }
}