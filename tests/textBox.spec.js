import { test, expect } from "../fixtures/elements.fixture";

test.beforeEach(async ({ page }) => {
  await page.goto('/text-box');
  await expect(page.locator('#userName')).toBeVisible();
  await expect(page.locator('#userName')).toBeEnabled();
  await expect(page.locator('#userEmail')).toBeVisible();
  await expect(page.locator('#userEmail')).toBeEnabled();
  await expect(page.locator('#currentAddress')).toBeVisible();
  await expect(page.locator('#currentAddress')).toBeEnabled();
  await expect(page.locator('#permanentAddress')).toBeVisible();
  await expect(page.locator('#permanentAddress')).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();
});

test("Fill Text Box Form", async ({ textBoxesPage }) => {

  await textBoxesPage.fillForm(
    "Swadhin Samal",
    "swadhin@example.com",
    "Kendrapara",
    "Odisha"
  );

  await textBoxesPage.verifyOutputContains("Swadhin Samal");
  await textBoxesPage.verifyOutputContains("swadhin@example.com");
  await textBoxesPage.verifyOutputContains("Kendrapara");
  await textBoxesPage.verifyOutputContains("Odisha");

});

