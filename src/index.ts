// Entry point — composition root
// 1. Valide les variables d'environnement (fail-fast)
// 2. Construit le container de dépendances
// 3. Lance le pipeline (une fois ou via cron)

import { logger } from '@shared/logger/logger';

logger.info('Veille-IA starting up...');

// TODO: décommenter quand les adapters infrastructure sont implémentés
// import { env } from '@config/env';
// import { buildContainer } from '@config/container';
// import { RunDailyPipeline } from '@application/use-cases/RunDailyPipeline';
// import cron from 'node-cron';
//
// const container = buildContainer();
// const pipeline = new RunDailyPipeline(container);
//
// if (process.env['RUN_ONCE'] === 'true') {
//   pipeline.run().catch((err) => { logger.error(err); process.exit(1); });
// } else {
//   cron.schedule(env.CRON_SCHEDULE, () => pipeline.run().catch(logger.error));
//   logger.info(`Pipeline scheduled: ${env.CRON_SCHEDULE}`);
// }
