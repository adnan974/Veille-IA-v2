export class SourceUrl {
  private constructor(private readonly value: string) {}

  static create(raw: string): SourceUrl {
    try {
      new URL(raw);
    } catch {
      throw new Error(`Invalid URL: ${raw}`);
    }
    return new SourceUrl(raw);
  }

  toString(): string {
    return this.value;
  }

  equals(other: SourceUrl): boolean {
    return this.value === other.value;
  }
}
