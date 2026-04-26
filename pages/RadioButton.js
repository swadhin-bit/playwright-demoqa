import { BasePage } from "./BasePage.js";
import { expect } from "../fixtures/elements.fixture.js";

export class RadioButton extends BasePage {
  constructor(page) {
    super(page);

    // Clickable locators (labels)
    this.yesRadioLabel = page.locator('label[for="yesRadio"]');
    this.impressiveRadioLabel = page.locator('label[for="impressiveRadio"]');
    this.noRadioLabel = page.locator('label[for="noRadio"]'); // disabled
    this.output = page.locator('.text-success');

    // Actual input elements if needed for checks
    this.yesRadioInput = page.getByRole('radio', { name: 'Yes' });
    this.impressiveRadioInput = page.getByRole('radio', { name: 'Impressive' });
    this.noRadioInput = page.getByRole('radio', { name: 'No' });
  }

  async selectYes() {
    await this.click(this.yesRadioLabel); // click the label, not input
  }

  async selectImpressive() {
    await this.click(this.impressiveRadioLabel);
  }

  async verifySelected(text) {
    await this.waitForVisibility(this.output);
    await this.assertText(this.output, text);
  }

  async isNoRadioDisabled() {
    return await this.noRadioInput.isDisabled();
  }

  
}
