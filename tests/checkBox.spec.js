
import {test, expect} from "../fixtures/testBase";

test.beforeEach(async ({ page }) => {
  await page.goto('/checkbox');
});

test('Check Home checkbox and verify result', async ({ checkBoxesPage }) => {
 
  await checkBoxesPage.checkHome();
   
  await expect(checkBoxesPage.homeCheckbox).toHaveAttribute('aria-checked', 'true');

  // Assert result contains the expected text
  const resultText = await checkBoxesPage.getResultText();
  expect(resultText).toContain('home');
  expect(resultText).toContain('desktop');

});

