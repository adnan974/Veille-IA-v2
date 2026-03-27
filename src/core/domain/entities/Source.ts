export type SourceType = 'rss' | 'html' | 'api';

export interface Source {
  id: string;
  name: string;
  url: string;
  type: SourceType;
  active: boolean;
  lastFetchedAt?: Date;
}
