import type { Article } from '@domain/entities/Article';
import type { Source } from '@domain/entities/Source';

export interface IScraperService {
  scrape(source: Source): Promise<Article[]>;
}
