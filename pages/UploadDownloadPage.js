import { BasePage } from "./BasePage.js";
import fs from "fs";

export class UploadDownloadPage extends BasePage {
  constructor(page) {
    super(page);
    this.uploadInput = page.locator('#uploadFile');
    this.downloadBtn = page.locator('#downloadButton');
  }

  async uploadFile(filePath) {
    await this.uploadInput.setInputFiles(filePath);
  }

  async downloadFile(savePath) {
    // Wait for button to be visible
    await this.downloadBtn.waitFor({ state: 'visible' });

    // Get the href of the download link (data URL)
    const dataUrl = await this.downloadBtn.getAttribute('href');

    // Extract base64 content
    const base64Data = dataUrl.split(',')[1];

    // Save as file
    fs.writeFileSync(savePath, Buffer.from(base64Data, 'base64'));
  }
}
