
import {test, expect} from "../fixtures/elements.fixture";

test.beforeEach(async ({ page }) => {
  await page.goto('/checkbox');
  await expect(page.locator('[aria-label="Select Home"]')).toBeVisible();
  await expect(page.locator('[aria-label="Select Home"]')).toBeEnabled();
  await expect(page.locator('#tree-node-home')).toBeVisible();
  await expect(page.locator('#tree-node-home')).toBeEnabled();
  await expect(page.locator('#result')).toBeVisible();
  await expect(page.locator('#result')).toBeEnabled();
});

test('Check Home checkbox and verify result', async ({ checkBoxesPage }) => {
 
  await checkBoxesPage.checkHome();
   
  await expect(checkBoxesPage.homeCheckbox).toHaveAttribute('aria-checked', 'true');

  // Assert result contains the expected text
  const resultText = await checkBoxesPage.getResultText();
  expect(resultText).toContain('home');
  expect(resultText).toContain('desktop');

});

