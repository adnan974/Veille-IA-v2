import { DomainError } from './DomainError';

export class ArticleNotFoundError extends DomainError {
  constructor(id: string) {
    super(`Article not found: ${id}`);
  }
}
