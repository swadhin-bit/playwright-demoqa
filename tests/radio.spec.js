import { test, expect } from "@playwright/test";
import { RadioButton } from "../pages/RadioButton.js";

test('check radiobutton', async ({ page }) => {
  const rd = new RadioButton(page);

  await rd.navigate("/radio-button"); // cleaner if baseURL is set
  //await rd.removeAds(); // cleaner if baseURL is set

  // Visibility
  await rd.waitForVisibility(rd.yesRadioLabel);

  // Disabled check
  await expect(rd.noRadioInput).toBeDisabled();

  // Select Yes
  await rd.selectYes();

  // Assert Yes is checked
  await expect(rd.yesRadioInput).toBeChecked();

  // Assert output
  await rd.verifySelected("Yes");
});
