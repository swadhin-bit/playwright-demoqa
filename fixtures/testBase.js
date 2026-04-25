import { test as base } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';
import { BasePage } from '../pages/BasePage';

export const test = base.extend({
  appPage: async ({ page }, use) => {

    // 🚫 No routing at all (pure mode)

    await page.route('**/*', route => {
  /*
  const url = route.request().url();

  if (
    url.includes('doubleclick') ||
    url.includes('googlesyndication') ||
    url.includes('ads') ||
    url.includes('analytics')
  ) {
    return route.abort();
  }
  */

  return route.continue();
});

    // Navigate
    await page.goto('/');

    // Avoid networkidle for demoqa (can hang)
    // await page.waitForLoadState('networkidle');

    await use(page);
  },

  alertsPage: async ({ appPage }, use) => {
    const alerts = new AlertsPage(appPage);

    await appPage.goto('/alerts', { waitUntil: 'domcontentloaded' });

    await use(alerts);
  }
});

export const expect = test.expect;