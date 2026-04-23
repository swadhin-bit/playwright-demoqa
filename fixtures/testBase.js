import { test as base } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';

export const test = base.extend({
  appPage: async ({ page }, use) => {

    // Step 1: Navigate (auth already handled via storageState)
    await page.goto('/');

    // Step 2: Wait for app to be ready (important)
    await page.waitForLoadState('networkidle');

    // Step 3: Pass page to test
    await use(page);

    // Optional teardown (runs after test)
    // console.log("Test finished");
  },


  alertsPage: async ({ appPage }, use) => {
    const alerts = new AlertsPage(appPage);

    await appPage.goto('/alerts'); // optional but recommended

    await use(alerts);
  }
});

export const expect = test.expect;