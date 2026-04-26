import { test, expect } from "../fixtures/elements.fixture";

test.beforeEach(async ({ page }) => {
  await page.goto('/radio-button');
  await expect(page.locator('label[for="yesRadio"]')).toBeVisible();
  await expect(page.locator('label[for="yesRadio"]')).toBeEnabled();
  await expect(page.getByRole('radio', { name: 'Yes' })).toBeVisible();
  //await expect(page.getByRole('radio', { name: 'Yes' })).toBeEnabled();
  await expect(page.locator('label[for="impressiveRadio"]')).toBeVisible();
  await expect(page.locator('label[for="impressiveRadio"]')).toBeEnabled();
  await expect(page.getByRole('radio', { name: 'Impressive' })).toBeVisible();
  await expect(page.getByRole('radio', { name: 'Impressive' })).toBeEnabled();
  //await expect(page.locator('label[for="noRadio"]')).toBeVisible();   
  /*await expect(page.locator('label[for="noRadio"]')).toBeEnabled();
  await expect(page.getByRole('radio', { name: 'No' })).toBeVisible();
  //await expect(page.getByRole('radio', { name: 'No' })).toBeEnabled();
  await expect(page.locator('.text-success')).toBeVisible();
  await expect(page.locator('.text-success')).toBeEnabled();*/

  /*
  await expect(page.locator('label[for="impressiveRadio"]')).toBeVisible();
  await expect(page.locator('label[for="impressiveRadio"]')).toBeEnabled();
  await expect(page.locator('label[for="noRadio"]')).toBeVisible();   
  await expect(page.locator('label[for="noRadio"]')).toBeEnabled();
  await expect(page.locator('.text-success')).toBeVisible();
  await expect(page.locator('.text-success')).toBeEnabled();

  */
  
});

test('check radiobutton', async ({ radioButtonsPage }) => {

  await expect(radioButtonsPage.noRadioInput).toBeDisabled();

  await radioButtonsPage.selectYes();

  await expect(radioButtonsPage.yesRadioInput).toBeChecked();

  await radioButtonsPage.verifySelected("Yes");

});