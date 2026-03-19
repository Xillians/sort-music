
import fs from 'fs';
import path from 'path';

export class FileManager {
  public readonly files: Map<string, string[]>
  constructor(filePath: string) {
    this.files = new Map<string, string[]>(); 
    const trackList = this.getAllFiles(filePath)

    trackList.forEach(track => {
      const normalisedName = this.normaliseName(path.basename(track));
      if (this.files.has(normalisedName)) {
        this.files.get(normalisedName)?.push(track)
      } else {
        this.files.set(normalisedName, [track])
      }
    })
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
}