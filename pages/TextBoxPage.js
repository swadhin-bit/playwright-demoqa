import { BasePage } from "./BasePage.js";
import { expect } from "@playwright/test";

export class TextBoxPage extends BasePage {

  constructor(page) {
    super(page);

    this.fullName = page.locator("#userName");
    this.email = page.locator("#userEmail");
    this.currAddress = page.locator("#currentAddress");
    this.perAddress = page.locator("#permanentAddress");
    this.submitBtn = page.locator("#submit");

    this.output = page.locator("#output");
  }

  async fillForm(name, email, address1, address2) {
    await this.type(this.fullName, name);
    await this.type(this.email, email);
    await this.type(this.currAddress, address1);
    await this.type(this.perAddress, address2);
    await this.click(this.submitBtn);
  }

  async verifyOutputContains(text) {
    await expect(this.output).toContainText(text);
  }
}
