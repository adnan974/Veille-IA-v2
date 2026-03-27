export interface ICurationPipeline {
  run(): Promise<void>;
}
