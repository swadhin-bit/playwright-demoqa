import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";
import fs from "fs";

export class UploadDownloadPage extends BasePage {
  constructor(page) {
    super(page);

    this.uploadInput = page.locator('#uploadFile');
    this.downloadBtn = page.locator('#downloadButton');
    this.uploadedFilePath = page.locator('#uploadedFilePath');
  }

  // Upload file
  async uploadFile(filePath) {
    await this.uploadInput.setInputFiles(filePath);
  }

  // Verify uploaded file (UI)
  async verifyUploadedFile(fileName) {
    await expect(this.uploadedFilePath).toContainText(fileName);
  }

  // Download file (base64 → save)
  async downloadFile(savePath) {
    const dataUrl = await this.downloadBtn.getAttribute('href');
    const base64Data = dataUrl.split(',')[1];

    fs.writeFileSync(savePath, Buffer.from(base64Data, 'base64'));
  }
}