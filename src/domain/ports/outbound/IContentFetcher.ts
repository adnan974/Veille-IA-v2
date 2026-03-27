import { ContentItem } from '@domain/entities/ContentItem';
import { Source } from '@domain/entities/Source';

export interface IContentFetcher {
  fetchContent(source: Source): Promise<ContentItem[]>;
}
