import { test, expect } from "../fixtures/alerts.fixture";
import { AlertsPage } from "../pages/AlertsPage";

test.beforeEach(async ({ page }) => {
  await page.goto('/alerts');
  await expect(page.locator('#alertButton')).toBeVisible();
  
  //await expect(page.locator('#confirmButton')).toBeVisible();
  //await expect(page.locator('#promptButton')).toBeVisible();
});

test('alerts', async ({ alertsPage }) => {

  await alertsPage.handleSimpleAlert();
  await alertsPage.handleConfirmAlert();
  await alertsPage.handlePromptAlert("Hello Playwright");
  await alertsPage.verifyPromptResult("Hello Playwright");

});
