import { SourceType } from '@domain/value-objects/SourceType';

export interface Source {
  id: string;
  type: SourceType;
  /** Handle X (@user), nom subreddit (r/foo) ou URL de flux RSS */
  handle: string;
  addedAt: Date;
  active: boolean;
}
