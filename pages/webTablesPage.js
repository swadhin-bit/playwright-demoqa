import { BasePage } from "./BasePage.js";
import { expect } from "@playwright/test";

export class WebTablesPage extends BasePage {
  constructor(page) {
    super(page);

    // Form
    this.addButton = page.locator("#addNewRecordButton");
    this.firstName = page.locator("#firstName");
    this.lastName = page.locator("#lastName");
    this.email = page.locator("#userEmail");
    this.age = page.locator("#age");
    this.salary = page.locator("#salary");
    this.department = page.locator("#department");
    this.submitBtn = page.locator("#submit");

    // Table
    this.rows = page.locator(".rt-tr-group");
  }

  // 🔹 Add Record
  async addRecord(fName, lName, mail, age, sal, dept) {
    await this.addButton.click();

    await this.firstName.fill(fName);
    await this.lastName.fill(lName);
    await this.email.fill(mail);
    await this.age.fill(age);
    await this.salary.fill(sal);
    await this.department.fill(dept);

    await this.submitBtn.click();

    // ✅ wait for modal to close (real signal)
    await expect(this.firstName).not.toBeVisible();
  }

  // 🔹 Get row by email (core method)
  getRowByEmail(email) {
    return this.rows.filter({ hasText: email });
  }

  // 🔹 Verify record exists (NO search, stable)
  async verifyRecordExists(email) {
  const row = this.getRowByEmail(email);

  await expect(row).toBeVisible({ timeout: 10000 });
}

  // 🔹 Update record
  async updateRecordByEmail(email, newFirstName) {
    const row = this.getRowByEmail(email);

    await expect(row).toHaveCount(1);

    await row.locator('[title="Edit"]').click();
    await this.firstName.fill(newFirstName);
    await this.submitBtn.click();

    // wait modal close
    await expect(this.firstName).not.toBeVisible();
  }

  // 🔹 Delete record
  async deleteRecordByEmail(email) {
    const row = this.getRowByEmail(email);

    await expect(row).toHaveCount(1);

    await row.locator('[title="Delete"]').click();
  }

  // 🔹 Verify deleted
  async verifyRecordDeleted(email) {
    const row = this.getRowByEmail(email);

    await expect(row).toHaveCount(0, { timeout: 10000 });
  }
}