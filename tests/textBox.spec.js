import { test, expect } from "../fixtures/elements.fixture";

test.beforeEach(async ({ page }) => {
  await page.goto('/text-box');
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

