import { env } from '@config/env';

import { IContentFetcher } from '@domain/ports/outbound/IContentFetcher';
import { ILlmProvider } from '@domain/ports/outbound/ILlmProvider';
import { INotionWriter } from '@domain/ports/outbound/INotionWriter';
import { ISourceRepository } from '@domain/ports/outbound/ISourceRepository';

// Infrastructure adapters (à implémenter)
// import { RedditFetcher } from '@infrastructure/fetchers/RedditFetcher';
// import { TwitterFetcher } from '@infrastructure/fetchers/TwitterFetcher';
// import { RssFetcher } from '@infrastructure/fetchers/RssFetcher';
// import { OpenAiProvider } from '@infrastructure/llm/OpenAiProvider';
// import { AnthropicProvider } from '@infrastructure/llm/AnthropicProvider';
// import { NotionWriter } from '@infrastructure/notion/NotionWriter';
// import { SqliteSourceRepository } from '@infrastructure/persistence/SqliteSourceRepository';

// Application use-cases (à implémenter)
// import { RunDailyPipeline } from '@application/use-cases/RunDailyPipeline';
// import { AddSource } from '@application/use-cases/AddSource';

export interface Container {
  fetchers: IContentFetcher[];
  llmProvider: ILlmProvider;
  notionWriter: INotionWriter;
  sourceRepository: ISourceRepository;
}

export function buildContainer(): Container {
  // TODO: instancier les adapters infrastructure et les injecter dans les use-cases
  // Exemple :
  //   const redditFetcher = new RedditFetcher(env.REDDIT_CLIENT_ID, env.REDDIT_CLIENT_SECRET, env.REDDIT_USER_AGENT);
  //   const llmProvider = env.LLM_PROVIDER === 'anthropic'
  //     ? new AnthropicProvider(env.LLM_API_KEY, env.LLM_MODEL)
  //     : new OpenAiProvider(env.LLM_API_KEY, env.LLM_MODEL);
  //   const notionWriter = new NotionWriter(env.NOTION_TOKEN, env.NOTION_DATABASE_ID);
  //   const sourceRepository = new SqliteSourceRepository();

  throw new Error('Container not yet implemented — wire infrastructure adapters here');
}
