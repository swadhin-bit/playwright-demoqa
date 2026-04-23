import { BasePage } from "./BasePage.js";
import { expect } from "@playwright/test";

export class WebTablesPage extends BasePage {
  constructor(page) {
    super(page);

    // Locators
    this.addButton = page.locator("#addNewRecordButton");
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.email = page.locator("#userEmail");
    this.age = page.locator("#age");
    this.salary = page.locator("#salary");
    this.department = page.locator("#department");
    this.submitBtn = page.locator("#submit");
    this.searchBox = page.locator("#searchBox");

    this.tableBody = page.locator(".rt-tbody");
    this.rows = page.locator(".rt-tr-group");
  }

  async addRecord(fName, lName, mail, age, sal, dept) {
    await this.click(this.addButton);
    await this.firstName.fill(fName);
    await this.lastName.fill(lName);
    await this.email.fill(mail);
    await this.age.fill(age);
    await this.salary.fill(sal);
    await this.department.fill(dept);
    await this.click(this.submitBtn);
  }

  async searchRecord(text) {
    await this.searchBox.fill(text);
  }

  async updateRecordByEmail(email, newFirstName) {
    const rowCount = await this.rows.count();

    for (let i = 0; i < rowCount; i++) {
      const row = this.rows.nth(i);
      const rowEmail = await row.locator(".rt-td").nth(3).textContent();

      if (rowEmail.includes(email)) {
        await row.locator('[title="Edit"]').click();
        await this.firstName.fill(newFirstName);
        await this.click(this.submitBtn);
        break;
      }
    }
  }

  async deleteRecordByEmail(email) {
    const rowCount = await this.rows.count();

    for (let i = 0; i < rowCount; i++) {
      const row = this.rows.nth(i);
      const rowEmail = await row.locator(".rt-td").nth(3).textContent();

      if (rowEmail.includes(email)) {
        await row.locator('[title="Delete"]').click();
        break;
      }
    }
  }

  async verifyRecordExists(text) {
    const row = this.rows.filter({ hasText: text });
    await expect(row.first()).toBeVisible({ timeout: 5000 });
  }
}
