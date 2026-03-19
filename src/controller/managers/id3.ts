import path from 'path';
import NodeID3 from 'node-id3';

const SUPPORTED_EXTENSIONS = new Set<string>(['.mp3']);

export function supportsFile(filePath: string): boolean {
  return SUPPORTED_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

export function readAlbum(filePath: string): string {
  const tags = NodeID3.read(filePath);
  return (tags.album ?? '').trim();
}

export function writeAlbum(filePath: string, album: string): boolean {
  const result = NodeID3.update({ album }, filePath);
  return result === true;
}
export function readTitle(filePath: string): string {
  const tags = NodeID3.read(filePath);
  return (tags.title ?? '').trim();
}
export function writeTitle(filePath: string, title: string): boolean {
  const result = NodeID3.update({ title }, filePath);
  return result === true;
}
export function readGenre(filePath: string): string {
  const tags = NodeID3.read(filePath);
  return (tags.genre ?? '').trim();
}
export function writeGenre(filePath: string, genre: string): boolean {
  const result = NodeID3.update({ genre }, filePath);
  return result === true;
}
export function readFileName(filePath: string): string {
  return path.basename(filePath);
}