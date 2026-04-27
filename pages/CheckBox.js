import { BasePage } from "./BasePage";

export class CheckBox extends BasePage {
  constructor(page) {
    super(page);

    this.homeCheckbox = page.locator('[aria-label="Select Home"]');
    this.result = page.locator('#result');
  }

  async checkHome() {
    await this.homeCheckbox.click();
  }

  async verifyHomeChecked() {
    await expect(this.homeCheckbox).toHaveAttribute('aria-checked', 'true');
  }

  async verifyResult() {
    await expect(this.result).toContainText('home');
  }
}
