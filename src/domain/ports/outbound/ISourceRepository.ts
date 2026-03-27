import { Source } from '@domain/entities/Source';
import { SourceType } from '@domain/value-objects/SourceType';

export interface ISourceRepository {
  findAll(): Promise<Source[]>;
  findActive(): Promise<Source[]>;
  save(source: Omit<Source, 'id' | 'addedAt'>): Promise<Source>;
  setActive(id: string, active: boolean): Promise<void>;
  findByTypeAndHandle(type: SourceType, handle: string): Promise<Source | null>;
}
