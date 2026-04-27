import { test, expect } from "../fixtures/upload.fixture";
import path from "path";
import fs from "fs";

test.beforeEach(async ({ page }) => {
  await page.goto('/upload-download');
  await expect(page.locator('#uploadFile')).toBeVisible();
});

test('Upload file', async ({ uploadDownloadPage }) => {

  const filePath = path.join(process.cwd(), 'test-data', 'JPG.jpg');

  await uploadDownloadPage.uploadFile(filePath);

  await uploadDownloadPage.verifyUploadedFile('JPG.jpg');

});


test('Download file', async ({ uploadDownloadPage }) => {

  const downloadPath = path.join(process.cwd(), 'JPG.jpg');

  await uploadDownloadPage.downloadFile(downloadPath);

  // Verify file exists
  expect(fs.existsSync(downloadPath)).toBe(true);

  // Cleanup
  fs.unlinkSync(downloadPath);

});
