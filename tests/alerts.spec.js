import { test, expect } from "../fixtures/testBase";

test.beforeEach(async ({ page }) => {
  await page.goto('/alerts');
});

test('alerts', async ({ alertsPage }) => {

  await alertsPage.handleSimpleAlert();
  await alertsPage.handleConfirmAlert();
  await alertsPage.handlePromptAlert("Hello Playwright");
  await alertsPage.verifyPromptResult("Hello Playwright");
  
});
