import { AppError } from '@shared/errors/AppError';

export class FetchError extends AppError {
  constructor(message: string, cause?: unknown) {
    super(message, 'FETCH_ERROR', cause);
  }
}
