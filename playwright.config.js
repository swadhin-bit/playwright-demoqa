// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },

  reporter: [['html']],

  timeout: 30000,
  expect: { timeout: 5000 },

  fullyParallel: false,

  // 🔥 ADD THIS
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    }
  ],
});