export class ArticleId {
  private constructor(private readonly value: string) {}

  static create(value: string): ArticleId {
    if (!value || value.trim().length === 0) {
      throw new Error('ArticleId cannot be empty');
    }
    return new ArticleId(value.trim());
  }

  toString(): string {
    return this.value;
  }

  equals(other: ArticleId): boolean {
    return this.value === other.value;
  }
}
