import { ScoredItem } from '@domain/ports/outbound/ILlmProvider';

export interface INotionWriter {
  writeItems(items: ScoredItem[]): Promise<void>;
}
