import { test, expect } from "@playwright/test";
import { CheckBox } from "../pages/checkBox";

test('Click on the Home checkbox', async ({ page }) => {

  const checkbox = new CheckBox(page);

  await checkbox.navigate("/checkbox");

  // Click the checkbox
  await checkbox.checkHome();

  // Assert checkbox is checked
  
 
  await expect(checkbox.homeCheckbox).toHaveAttribute('aria-checked', 'true');

  // Assert result contains the expected text
  const resultText = await checkbox.getResultText();
  expect(resultText).toContain('home');
  expect(resultText).toContain('desktop');
});
