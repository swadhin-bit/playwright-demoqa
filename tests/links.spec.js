import { test, expect } from "../fixtures/testBase";

test.beforeEach(async ({ page }) => {
  await page.goto('/links');
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

