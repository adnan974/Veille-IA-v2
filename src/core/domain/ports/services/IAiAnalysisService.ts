import type { Article } from '@domain/entities/Article';

export interface AiAnalysisResult {
  summary: string;
  relevanceScore: number;
  tags: string[];
}

export interface IAiAnalysisService {
  analyze(article: Article): Promise<AiAnalysisResult>;
}
