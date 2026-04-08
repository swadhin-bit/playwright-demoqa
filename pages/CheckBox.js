import { BasePage } from "./BasePage";

export class CheckBox extends BasePage {
  constructor(page) {
    super(page);

    this.homeLabel = page.locator('label[for="tree-node-home"]');
    this.homeInput = page.locator('#tree-node-home');
    this.result = page.locator('#result');
  }

  async checkHome() {
    await this.click(this.homeLabel);
  }

  async isHomeChecked() {
    return await this.homeInput.isChecked();
  }

  async getResultText() {
    return await this.result.textContent();
  }
}
