import { test, expect } from "../fixtures/elements.fixture";

test.beforeEach(async ({ page }) => {
  await page.goto('/links');
  await expect(page.locator('#simpleLink')).toBeVisible();
  await expect(page.locator('#simpleLink')).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Created' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Created' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'No Content' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'No Content' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Moved' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Moved' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Bad Request' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Bad Request' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Unauthorized' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Unauthorized' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Forbidden' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Forbidden' })).toBeEnabled();
  await expect(page.getByRole('link', { name: 'Not Found' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Not Found' })).toBeEnabled();
});

test('DemoQA Links Automation', async ({ linksPage
}) => {

  const newPage = await linksPage.clickHomeLink(linksPage.page.context());
  await newPage.waitForLoadState();

  expect(newPage.url()).toContain('demoqa.com');

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
    await linksPage.clickApiLink(api.name);
    await expect(linksPage.linkResponse).toHaveText(api.code);
  }


});

