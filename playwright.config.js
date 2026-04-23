// @ts-check
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables
/*dotenv.config({
  path: `.env.${process.env.ENV || 'dev'}`
});*/

/*dotenv.config({
  path: `.env.${process.env.ENV || 'qa'}`
});*/

const ENV = process.env.ENV || 'qa';

dotenv.config({
  path: `.env.${ENV}`
});

export default defineConfig({
  testDir: './tests',

  /* Global timeouts */
  timeout: 30000,
  expect: {
    timeout: 5000,
  },

  /* Execution settings */
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  /* Reporters */
  reporter: [
    ['html'],
    ['list']
  ],

  /* Shared settings */
  use: {
    baseURL: process.env.BASE_URL || 'https://demoqa.com',
    actionTimeout: 15000,
  navigationTimeout: 60000,
    //baseURL: process.env.BASE_URL,
    //storageState: 'auth.json',
    headless: true,

    viewport: { width: 1280, height: 720 },

    ignoreHTTPSErrors: true,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    globalSetup: './global-setup.js',
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],

  /* Optional: Folder for test artifacts */
  outputDir: 'test-results/',
});