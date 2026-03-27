export interface ArticleDto {
  id: string;
  sourceId: string;
  title: string;
  url: string;
  content: string;
  publishedAt: string;
  fetchedAt: string;
  summary?: string;
  relevanceScore?: number;
  tags?: string[];
}
