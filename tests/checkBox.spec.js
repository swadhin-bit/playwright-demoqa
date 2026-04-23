import { test, expect } from "@playwright/test";
import { CheckBox } from "../pages/checkBox";
import { BasePage } from "../pages/BasePage";

test('Click on the Home checkbox', async ({ page }) => {

  const checkbox = new CheckBox(page);

  await checkbox.navigate("/checkbox", { timeout: 60000 }); // cleaner if baseURL is set
  await checkbox.waitForVisibility(checkbox.homeCheckbox);
  await checkbox.expandAll(); // Ensure all checkboxes are visible
  await checkbox.waitForVisibility(checkbox.desktopCheckbox); // Wait for desktop to be visible after expanding
  await checkbox.removeAds(); // cleaner if baseURL is set

  // Click the checkbox
  await checkbox.checkHome();

  // Assert checkbox is checked
  
 
  await expect(checkbox.homeCheckbox).toHaveAttribute('aria-checked', 'true');

  // Assert result contains the expected text
  const resultText = await checkbox.getResultText();
  expect(resultText).toContain('home');
  expect(resultText).toContain('desktop');
});
