export class Url {
  private constructor(readonly value: string) {}

  static create(raw: string): Url {
    try {
      new URL(raw);
    } catch {
      throw new Error(`Invalid URL: ${raw}`);
    }
    return new Url(raw);
  }

  toString(): string {
    return this.value;
  }
}
