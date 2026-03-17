export interface TrackMetadata {
  title: string;
  releaseDate: string;
  variant: boolean;
  tier: string;
  album: string;
  foundryModule: string;
  tags: string[];
  patreon: string;
  notes: string;
}

export enum Environment {
  Production = 'production',
  Development = 'development',
  Test = 'test'
}