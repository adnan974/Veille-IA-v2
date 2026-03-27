export interface Article {
  id: string;
  sourceId: string;
  title: string;
  url: string;
  content: string;
  publishedAt: Date;
  fetchedAt: Date;
  summary?: string;
  relevanceScore?: number;
  tags?: string[];
}
