import { AppError } from '@shared/errors/AppError';

export class LlmError extends AppError {
  constructor(message: string, cause?: unknown) {
    super(message, 'LLM_ERROR', cause);
  }
}
