import fs from 'fs';
import type { TrackMetadata } from '../core/types.js';
import path from 'path';
import { logger } from '../core/config.js';

export class CSVManager {
  public readonly tracks: Map<string, TrackMetadata[]>;
  constructor(csvFilePath: string) {
    this.tracks = this.parseCSV(csvFilePath);
  }

  /**
   * Parses the CSV from e raw string to be converted into the structured 
   * data using TrackMetaData object. 
   * 
   * For each line in the csv file, use the parseCSVline.
   * @param csvContent the raw data from the CSV file. 
   * @returns tracks keyed by normalized base title. Variants share the same key.
   */
  private parseCSV(csvContent: string): Map<string, TrackMetadata[]> {
    const lines = csvContent.split(/\r?\n/).map(l => l.trim()).filter(l => l);

    logger.debug({ lines: lines.length }, '🔍 CSV has been read');

    // skip the first line (headers)
    const dataLines = lines.slice(1);

    const trackList = dataLines.map(line => this.parseLineToTrack(line));
    const tracks = new Map<string, TrackMetadata[]>();

    for (const track of trackList) {
      const key = this.normaliseBaseTitle(track.title);
      const existing = tracks.get(key) ?? [];
      existing.push(track);
      tracks.set(key, existing);
    }

    logger.debug({
      totalTracks: trackList.length,
      mapKeys: tracks.size,
    }, '✅ Parsed valid tracks from CSV');
    return tracks;
  }
  /**
 * Parse a CSV line and directly convert to TrackMetadata
 */
  private parseLineToTrack(line: string): TrackMetadata {
    const fields: string[] = [];
    let current = '';
    let inQuotes = false;

    for (const char of line) {
      if (char === '"') inQuotes = !inQuotes;
      else if (char === ',' && !inQuotes) {
        fields.push(current.trim());
        current = '';
      } else current += char;
    }
    fields.push(current.trim());

    // Convert fields directly to TrackMetadata
    const [title, releaseDate, , variant, tier, album, foundryModule, tags, patreon, notes] = fields;
    return {
      title: title || '',
      releaseDate: releaseDate || '',
      // if variant is yes, treat as "baseline", otherwise, find the variant name from within paranthesis in the title, e.g. "Track Title (Variant Name)" -> variant: "Variant Name"
      variant: variant.toLowerCase() === 'yes' ? 'baseline' : (title.match(/\(([^)]+)\)/)?.[1] || '').trim(),
      tier: tier || '',
      album: album || '',
      foundryModule: foundryModule || '',
      tags: tags?.split(',').map(tag => tag.trim()).filter(Boolean) || [],
      patreon: patreon || '',
      notes: notes || ''
    };
  }
  public static fromFile(filePath?: string): CSVManager {
    const defaultPath = path.join(process.cwd(), 'src', 'soundtracks', 'Music d20 _ Borough Bound Master Spreadsheet - All Tracks.csv');
    const content = fs.readFileSync(filePath ?? defaultPath, 'utf-8');
    return new CSVManager(content);
  }

  private normaliseBaseTitle(title: string): string {
    return title
      .replace(/\s*\(.*?\)/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();
  }
}