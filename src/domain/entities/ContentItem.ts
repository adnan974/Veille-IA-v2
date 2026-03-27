import { SourceType } from '@domain/value-objects/SourceType';

export interface ContentItem {
  id: string;
  title: string;
  url: string;
  sourceType: SourceType;
  sourceHandle: string;
  rawText: string;
  publishedAt: Date;
  /** Présent uniquement après scoring LLM */
  score?: number;
  /** Présent uniquement après summarization LLM */
  summary?: string;
}
