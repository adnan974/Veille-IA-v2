import type { Article } from '@domain/entities/Article';

export interface IArticleRepository {
  findById(id: string): Promise<Article | null>;
  findAll(): Promise<Article[]>;
  save(article: Article): Promise<void>;
  existsByUrl(url: string): Promise<boolean>;
}
