import { chromium } from '@playwright/test';
import dotenv from 'dotenv';
import config from './playwright.config.js';
import { config as envConfig } from './config/envConfig.js';

// Load env
dotenv.config({
  path: `.env.${process.env.ENV || 'qa'}`
});

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  //await page.goto(process.env.BASE_URL + '/login');
  await page.goto(config.baseURL + '/');

  /*await page.fill('#userName', process.env.USERNAME);
  await page.fill('#password', process.env.PASSWORD);
  await page.click('#login');*/

  // Wait for successful login (important)
  //await page.waitForURL('**/profile');

  // Save auth state
  //await page.context().storageState({ path: 'auth.json' });

  await browser.close();
}

export default globalSetup;