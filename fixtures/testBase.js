import { test as base } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';
import { BasePage } from '../pages/BasePage';

export const test = base.extend({
  appPage: async ({ page }, use) => {

     // 🔥 1. ADD THIS BLOCK (Ad blocking)
    await page.route('**/*', route => {
      const url = route.request().url();

      if (
        url.includes('doubleclick') ||
        url.includes('googlesyndication') ||
        url.includes('ads') ||
        url.includes('analytics')
      ) {
        return route.abort();
      }

      return route.continue();
    });


    // 🔥 2. Navigate
    // Step 1: Navigate (auth already handled via storageState)
    await page.goto('/');

    // Step 2: Wait for app to be ready (important)
    await page.waitForLoadState('networkidle');

    // 🔥 3. REMOVE POPUPS HERE (THIS IS THE RIGHT PLACE)
    await page.evaluate(() => {
      const modal = document.querySelector('[class*="modal"]');
      if (modal) modal.remove();
    });

// 🔥 4. Pass page to test
    // Step 3: Pass page to test
    await use(page);

    // Optional teardown (runs after test)
    // console.log("Test finished");
  },

  


  alertsPage: async ({ appPage }, use) => {
    const alerts = new AlertsPage(appPage);

    await appPage.goto('/alerts'); // optional but recommended
    await alerts.removeAds(); // cleaner if baseURL is set

    await use(alerts);
  }
});

export const expect = test.expect;