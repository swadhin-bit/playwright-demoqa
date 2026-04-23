import { test, expect } from '@playwright/test';
import { Links } from '../pages/Links';

test.describe('DemoQA Links Automation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/links');
  });

  test('Verify Home Link opens new tab', async ({ page, context }) => {
    const links = new Links(page);

    const newPage = await links.clickHomeLink(context);
    await newPage.waitForLoadState();

    expect(newPage.url()).toContain('demoqa.com');
  });

  test('Verify all API link responses', async ({ page }) => {
    const links = new Links(page);

    const apiLinks = [
      { name: 'Created', code: 'Link has responded with staus 201 and status text Created' },
      { name: 'No Content', code: 'Link has responded with staus 204 and status text No Content' },
      { name: 'Moved', code: 'Link has responded with staus 301 and status text Moved Permanently' },
      { name: 'Bad Request', code: 'Link has responded with staus 400 and status text Bad Request' },
      { name: 'Unauthorized', code: 'Link has responded with staus 401 and status text Unauthorized' },
      { name: 'Forbidden', code: 'Link has responded with staus 403 and status text Forbidden' },
      { name: 'Not Found', code: 'Link has responded with staus 404 and status text Not Found' }
    ];

    for (const api of apiLinks) {
      await links.clickApiLink(api.name);
      await expect(links.linkResponse).toHaveText(api.code);
    }
  });

});
