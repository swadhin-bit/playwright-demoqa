import {test, expect} from "../fixtures/elements.fixture";

test.beforeEach(async ({ page }) => {
  await page.goto('/buttons');
  await expect(page.locator('#doubleClickBtn')).toBeVisible();
  await expect(page.locator('#doubleClickBtn')).toBeEnabled();
  await expect(page.locator('#rightClickBtn')).toBeVisible();
  await expect(page.locator('#rightClickBtn')).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Click Me', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Click Me', exact: true })).toBeEnabled();
});

test("Buttons", async ({ buttonsPage }) => {
  await buttonsPage.doubleClickButton();
  await buttonsPage.rightClickButton();
  await buttonsPage.dynamicClickButton();
});

