// tests/alerts.spec.js
import { test as baseTest } from "@playwright/test";
import { test , expect} from "../fixtures/testBase";
import { AlertsPage } from "../pages/AlertsPage";
import config from "../playwright.config.js";

baseTest.skip("Handle all types of Alerts", async ({ page }) => {

  const alerts = new AlertsPage(page);

  await page.goto("/alerts", { timeout: 60000 });
  //await page.goto(config.baseURL + "/alerts");
  
  await alerts.handleSimpleAlert();
  await alerts.handleConfirmAlert();
  await alerts.handlePromptAlert("Hello Playwright");

  await expect(page.locator("#promptResult")).toContainText("Hello Playwright");
});

test.skip('Handle all types of Alerts 2', async ({ appPage }) => {
  const alerts = new AlertsPage(appPage);

  await appPage.goto('/alerts', { timeout: 60000 }); // cleaner if baseURL is set

  await alerts.handleSimpleAlert();
  await alerts.handleConfirmAlert();
  await alerts.handlePromptAlert("Hello Playwright");

  await expect(appPage.locator("#promptResult"))
    .toContainText("Hello Playwright");
});

test('alerts', async ({ alertsPage }) => {
  //const alerts = new AlertsPage(alertsPage);
  await alertsPage.handleSimpleAlert();
  await alertsPage.handleConfirmAlert();
  await alertsPage.handlePromptAlert("Hello Playwright");

  /*await expect(alertsPage.page.locator("#promptResult"))
    .toContainText("Hello Playwright");*/

    await alertsPage.verifyPromptResult("Hello Playwright");

});
