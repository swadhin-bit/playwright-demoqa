// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    headless: false,               // visible browser → helps learning
    screenshot: 'only-on-failure', // saves screenshots only when tests fail
    video: 'retain-on-failure',    // debugging failures
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },

  reporter: [['html']],             // simple report → easy to open

  timeout: 30000,
  expect: { timeout: 5000 },

  fullyParallel: false,             // keep simple for a fresher
});
