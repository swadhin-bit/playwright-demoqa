import { test as base } from '@playwright/test';
import { AlertsPage } from '../pages/AlertsPage';

export const test = base.extend({

  alertsPage: async ({ page }, use) => {
    await use(new AlertsPage(page));
  }

});

export const expect = test.expect;