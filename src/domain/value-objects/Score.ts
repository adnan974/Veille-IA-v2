export class Score {
  private constructor(readonly value: number) {}

  static create(value: number): Score {
    if (!Number.isFinite(value) || value < 0 || value > 10) {
      throw new Error(`Score must be between 0 and 10, got ${value}`);
    }
    return new Score(Math.round(value * 10) / 10);
  }

  toString(): string {
    return this.value.toString();
  }
}
