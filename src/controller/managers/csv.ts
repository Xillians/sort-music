import fs from 'fs';
import type { TrackMetadata } from './types.js';
import path from 'path';
import { logger } from './config.js';

export class CSVManager {
  public readonly tracks: TrackMetadata[];
  constructor(csvFilePath: string) {
    this.tracks = this.parseCSV(csvFilePath);
  }

  /**
   * Parses the CSV from e raw string to be converted into the structured 
   * data using TrackMetaData object. 
   * 
   * For each line in the csv file, use the parseCSVline.
   * @param csvContent the raw data from the CSV file. 
   * @returns the structured array of data from the CSV file
   */
  private parseCSV(csvContent: string): TrackMetadata[] {
    const lines = csvContent.split(/\r?\n/).map(l => l.trim()).filter(l => l);

    logger.debug({ lines: lines.length }, '🔍 CSV has been read');

    // skip the first line (headers)
    const dataLines = lines.slice(1);

    const tracks = dataLines.map(line => this.parseLineToTrack(line));

    logger.debug({ trackLength: tracks.length }, '✅ Parsed valid tracks from CSV');
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
      variant: variant?.toLowerCase() === 'yes',
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
}