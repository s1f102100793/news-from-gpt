import server from '$/$server';
import { API_BASE_PATH, CORS_ORIGIN } from '$/service/envValues';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import type { FastifyServerFactory } from 'fastify';
import Fastify from 'fastify';

const CORS_ORIGIN_STRING = CORS_ORIGIN.split(',');

export const init = (serverFactory?: FastifyServerFactory) => {
  const app = Fastify({ serverFactory });
  app.register(helmet);
  app.register(cors, { origin: CORS_ORIGIN_STRING, credentials: true });
  app.register(cookie);
  server(app, { basePath: API_BASE_PATH });

  return app;
};
