import { test, expect } from "../fixtures/elements.fixture";

test.beforeEach(async ({ checkBoxesPage }) => {
  await checkBoxesPage.page.goto('/checkbox');
  await expect(checkBoxesPage.homeCheckbox).toBeVisible();
});

test('Check Home checkbox and verify result', async ({ checkBoxesPage }) => {
 
  await checkBoxesPage.checkHome();

  await expect(checkBoxesPage.homeCheckbox)
    .toHaveAttribute('aria-checked', 'true');

  await expect(checkBoxesPage.result).toContainText('home');
  await expect(checkBoxesPage.result).toContainText('desktop');
});