export type AlertChannel = 'slack' | 'email' | 'webhook';

export interface Alert {
  id: string;
  articleId: string;
  channel: AlertChannel;
  sentAt?: Date;
  payload: Record<string, unknown>;
}
