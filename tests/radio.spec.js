import { test, expect } from "../fixtures/testBase";


test.beforeEach(async ({ page }) => {
  await page.goto('/radio-button');
});


test('check radiobutton', async ({ radioButtonsPage }) => {

  // Visibility
  await radioButtonsPage.waitForVisibility(radioButtonsPage.yesRadioLabel);

  // Disabled check
  await expect(radioButtonsPage.noRadioInput).toBeDisabled();

  // Select Yes
  await radioButtonsPage.selectYes();

  // Assert Yes is checked
  await expect(radioButtonsPage.yesRadioInput).toBeChecked();

  // Assert output
  await radioButtonsPage.verifySelected("Yes");

});

