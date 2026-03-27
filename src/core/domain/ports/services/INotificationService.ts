import type { Alert } from '@domain/entities/Alert';

export interface INotificationService {
  send(alert: Alert): Promise<void>;
}
