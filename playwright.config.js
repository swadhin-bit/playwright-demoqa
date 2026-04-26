import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

const ENV = process.env.ENV || 'qa';

dotenv.config({
  path: `.env.${ENV}`
});

export default defineConfig({
  testDir: './tests',

  //globalSetup: './global-setup.js',
  //globalSetup: './fixtures/global-setup.js',

  timeout: 30000,
  expect: {
    timeout: 5000,
  },

  fullyParallel: true,
  retries: process.env.CI ? 0 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    baseURL: process.env.BASE_URL || "https://demoqa.com",
    navigationTimeout: 45000,
    actionTimeout: 10000,
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    }
  ],

  outputDir: 'test-results/',
});