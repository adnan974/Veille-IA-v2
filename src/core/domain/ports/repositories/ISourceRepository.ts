import type { Source } from '@domain/entities/Source';

export interface ISourceRepository {
  findById(id: string): Promise<Source | null>;
  findAll(): Promise<Source[]>;
  findActive(): Promise<Source[]>;
  save(source: Source): Promise<void>;
  updateLastFetchedAt(id: string, date: Date): Promise<void>;
}
