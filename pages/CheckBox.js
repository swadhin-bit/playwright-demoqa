import { BasePage } from "./BasePage";

export class CheckBox extends BasePage {
  constructor(page) {
    super(page);

  
    this.homeCheckbox = page.locator('[aria-label="Select Home"]');
    this.homeInput = page.locator('#tree-node-home');
    this.result = page.locator('#result');
  }

  async checkHome() {
  await this.homeCheckbox.waitFor({ state: 'visible' });
  await this.homeCheckbox.click();
}

  async isHomeChecked() {
    return await this.homeInput.isChecked();
  }

  async getResultText() {
    return await this.result.textContent();
  }
}
