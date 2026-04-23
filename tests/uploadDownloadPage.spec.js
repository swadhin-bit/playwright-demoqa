import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";
import { UploadDownloadPage } from "../pages/UploadDownloadPage.js";

test('Upload and Download files', async ({ page }) => {
  const ud = new UploadDownloadPage(page);
  await page.goto('/upload-download', { timeout: 60000 }); // cleaner if baseURL is set
  await ud.removeAds(); // cleaner if baseURL is set

  const downloadPath = path.join(process.cwd(), 'downloadedFile.png');

  await ud.downloadFile(downloadPath);

  // Verify file exists
  expect(fs.existsSync(downloadPath)).toBe(true);

  // Cleanup
  fs.unlinkSync(downloadPath);
});
