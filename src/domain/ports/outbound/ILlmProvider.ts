import { ContentItem } from '@domain/entities/ContentItem';
import { UserPreferences } from '@domain/entities/UserPreferences';

export interface ScoredItem extends ContentItem {
  score: number;
  summary: string;
}

export interface ILlmProvider {
  scoreAndSummarize(
    items: ContentItem[],
    preferences: UserPreferences,
  ): Promise<ScoredItem[]>;
}
