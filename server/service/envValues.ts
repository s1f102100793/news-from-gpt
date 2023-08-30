import dotenv from 'dotenv';

dotenv.config();

const PORT = +(process.env.PORT ?? '8080');
const API_BASE_PATH = process.env.API_BASE_PATH ?? '';
const API_ORIGIN = process.env.API_ORIGIN ?? '';
const CORS_ORIGIN = process.env.CORS_ORIGIN ?? '';
const FIREBASE_AUTH_EMULATOR_HOST = process.env.FIREBASE_AUTH_EMULATOR_HOST;
const FIREBASE_SERVER_KEY = process.env.FIREBASE_SERVER_KEY ?? '';
const TWITTER_USERNAME = process.env.TWITTER_USERNAME ?? '';
const TWITTER_PASSWORD = process.env.TWITTER_PASSWORD ?? '';
const NEWSAPI = process.env.NEWS_API ?? '';
const OPENAIAPI = process.env.OPENAI_API ?? '';

export {
  API_BASE_PATH,
  API_ORIGIN,
  CORS_ORIGIN,
  FIREBASE_AUTH_EMULATOR_HOST,
  FIREBASE_SERVER_KEY,
  NEWSAPI,
  OPENAIAPI,
  PORT,
  TWITTER_PASSWORD,
  TWITTER_USERNAME,
};
