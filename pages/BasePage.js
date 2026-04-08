import { expect } from "@playwright/test";

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  // ----------------------
  // Navigation
  // ----------------------
  async navigate(url, options = {}) {
    await this.page.goto(url, options);
  }

  async goBack() {
    await this.page.goBack();
  }

  async goForward() {
    await this.page.goForward();
  }

  async reload() {
    await this.page.reload();
  }

  // ----------------------
  // Actions (Locators only)
  // ----------------------
  async click(locator, options = {}) {
    await locator.click(options);
  }

  async dblClick(locator) {
    await locator.dblclick();
  }

  async rightClick(locator) {
    await locator.click({ button: "right" });
  }

  async type(locator, text, options = {}) {
    await locator.fill(text, options);
  }

  async clear(locator) {
    await locator.fill('');
  }

  async hover(locator) {
    await locator.hover();
  }

  async scrollIntoView(locator) {
    await locator.scrollIntoViewIfNeeded();
  }

  // ----------------------
  // Form elements
  // ----------------------
  async check(locator) {
    await locator.check();
  }

  async uncheck(locator) {
    await locator.uncheck();
  }

  async selectDropdownByValue(locator, value) {
    await locator.selectOption({ value });
  }

  async selectDropdownByLabel(locator, label) {
    await locator.selectOption({ label });
  }

  async selectDropdownByIndex(locator, index) {
    await locator.selectOption({ index });
  }

  // ----------------------
  // Assertions
  // ----------------------
  async assertText(locator, expectedText) {
    await expect(locator).toHaveText(expectedText);
  }

  async assertContainsText(locator, expectedText) {
    await expect(locator).toContainText(expectedText);
  }

  async assertVisible(locator) {
    await expect(locator).toBeVisible();
  }

  async assertHidden(locator) {
    await expect(locator).toBeHidden();
  }

  async assertEnabled(locator) {
    await expect(locator).toBeEnabled();
  }

  async assertDisabled(locator) {
    await expect(locator).toBeDisabled();
  }

  // ----------------------
  // Waits
  // ----------------------
  async waitForVisibility(locator, timeout = 5000) {
    await expect(locator).toBeVisible({ timeout });
  }

  async waitForClickable(locator, timeout = 5000) {
    await expect(locator).toBeEnabled({ timeout });
  }

  async waitForText(locator, expectedText, timeout = 5000) {
    await expect(locator).toHaveText(expectedText, { timeout });
  }

  // ----------------------
  // Element information
  // ----------------------
  async getText(locator) {
    return await locator.innerText();
  }

  async getAttribute(locator, attr) {
    return await locator.getAttribute(attr);
  }

  async isVisible(locator) {
    return await locator.isVisible();
  }

  async isEnabled(locator) {
    return await locator.isEnabled();
  }

  // ----------------------
  // Alerts & Dialogs
  // ----------------------
  async acceptAlert(callback) {
    this.page.once('dialog', dialog => dialog.accept());
    await callback();
  }

  async dismissAlert(callback) {
    this.page.once('dialog', dialog => dialog.dismiss());
    await callback();
  }

  async getAlertText(callback) {
    let message;
    this.page.once('dialog', dialog => {
      message = dialog.message();
      dialog.dismiss();
    });
    await callback();
    return message;
  }

  // ----------------------
  // Frames
  // ----------------------
  switchToFrame(locator) {
    return locator; // should be frameLocator in page class
  }

  // ----------------------
  // Mouse & Keyboard
  // ----------------------
  async pressKey(key) {
    await this.page.keyboard.press(key);
  }

  async typeWithKeyboard(text) {
    await this.page.keyboard.type(text);
  }

  async hoverAndClick(locator) {
    await locator.hover();
    await locator.click();
  }

  // ----------------------
  // Screenshots
  // ----------------------
  async takeScreenshot(path = 'screenshot.png', options = {}) {
    await this.page.screenshot({ path, ...options });
  }

  // ----------------------
  // Wait for network / URL
  // ----------------------
  async waitForURL(url, options = {}) {
    await this.page.waitForURL(url, options);
  }

  async waitForResponse(urlOrPredicate, options = {}) {
    await this.page.waitForResponse(urlOrPredicate, options);
  }
}
