// tests/alerts.spec.js
import { test, expect } from "@playwright/test";
import { AlertsPage } from "../pages/AlertsPage";

test("Handle all types of Alerts", async ({ page }) => {

  const alerts = new AlertsPage(page);

  await page.goto("https://demoqa.com/alerts");

  await alerts.handleSimpleAlert();
  await alerts.handleConfirmAlert();
  await alerts.handlePromptAlert("Hello Playwright");

  await expect(page.locator("#promptResult")).toContainText("Hello Playwright");
});
