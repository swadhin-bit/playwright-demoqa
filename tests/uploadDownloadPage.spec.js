import { test, expect } from "../fixtures/testBase";
import path from "path";
import fs from "fs";


test.beforeEach(async ({ page }) => {
  await page.goto('/upload-download');
});


test('Download file', async ({ uploadDownloadPage }) => {

  const downloadPath = path.join(process.cwd(), 'downloadedFile.png');

  await uploadDownloadPage.downloadFile(downloadPath);

  // Verify file exists
  expect(fs.existsSync(downloadPath)).toBe(true);

  // Cleanup
  fs.unlinkSync(downloadPath);

});

