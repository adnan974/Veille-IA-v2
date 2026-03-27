import { z } from 'zod';

const envSchema = z.object({
  // Reddit
  REDDIT_CLIENT_ID: z.string().min(1),
  REDDIT_CLIENT_SECRET: z.string().min(1),
  REDDIT_USER_AGENT: z.string().min(1).default('veille-ia-v2/0.1'),

  // X (Twitter)
  X_BEARER_TOKEN: z.string().min(1),

  // Notion
  NOTION_TOKEN: z.string().min(1),
  NOTION_DATABASE_ID: z.string().min(1),

  // LLM
  LLM_PROVIDER: z.enum(['openai', 'anthropic']).default('openai'),
  LLM_API_KEY: z.string().min(1),
  LLM_MODEL: z.string().default('gpt-4o'),

  // App
  LOG_LEVEL: z.enum(['trace', 'debug', 'info', 'warn', 'error']).default('info'),
  MIN_SCORE_THRESHOLD: z.coerce.number().min(0).max(10).default(5),
  LLM_BATCH_SIZE: z.coerce.number().int().positive().default(20),
  CRON_SCHEDULE: z.string().default('0 8 * * *'),
});

function loadEnv() {
  const result = envSchema.safeParse(process.env);
  if (!result.success) {
    console.error('Invalid environment variables:\n', result.error.format());
    process.exit(1);
  }
  return result.data;
}

export const env = loadEnv();
export type Env = z.infer<typeof envSchema>;
