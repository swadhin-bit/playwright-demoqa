// pages/AlertsPage.js
import { BasePage } from "./BasePage.js";
import { expect } from "@playwright/test";

export class AlertsPage extends BasePage {

  constructor(page) {
    super(page);

    this.alertButton = page.locator('#alertButton');
    this.confirmButton = page.locator('#confirmButton');
    this.promptButton = page.locator('#promtButton'); // correct as per DOM
  }

  async handleSimpleAlert() {
  this.page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await this.alertButton.click();
}

async handleConfirmAlert() {
  this.page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.dismiss();
  });

  await this.confirmButton.click();
}

async handlePromptAlert(text) {
  this.page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept(text);
  });

  await this.promptButton.click();
}
  async verifyPromptResult(text) {
    await expect(this.page.locator("#promptResult"))
      .toContainText(text);
  }
}