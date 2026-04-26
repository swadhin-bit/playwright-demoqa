import { test as base } from '@playwright/test';
import { UploadDownloadPage } from '../pages/UploadDownloadPage';

export const test = base.extend({
  uploadDownloadPage: async ({ page }, use) => {
    await use(new UploadDownloadPage(page));
  }
});

export const expect = test.expect;