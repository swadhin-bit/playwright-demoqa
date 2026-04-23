// config/envConfig.js

import dotenv from 'dotenv';
import config from '../playwright.config.js';

// Decide environment (default = qa)
const ENV = config.ENV || 'qa';

// Load correct .env file
dotenv.config({
  path: `.env.${ENV}`
});

// Export structured config
export const config = {
  env: ENV,
  baseURL: config.BASE_URL,
  username: config.USERNAME,
  password: config.PASSWORD,
};