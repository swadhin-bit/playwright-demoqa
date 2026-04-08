import { test, expect } from "@playwright/test";
import { WebTablesPage } from "../pages/webTablesPage.js";

test("Add, Search, Update and Delete Web Table Record", async ({ page }) => {

  const webTable = new WebTablesPage(page);
  await webTable.navigate("https://demoqa.com/webtables");

  // 1️⃣ Add record
  await webTable.addRecord("Swadhin", "Samal", "test@mail.com", "25", "35000", "QA");

  // 2️⃣ Search + verify
  await webTable.searchRecord("Swadhin");
  await expect(webTable.searchBox).toHaveValue("Swadhin");
  await expect(webTable.tableBody).toContainText("Swadhin");
  await expect(webTable.tableBody).toContainText("Samal");
  await expect(webTable.tableBody).toContainText("test@mail.com");

  // 3️⃣ Update record
  await webTable.updateRecordByEmail("test@mail.com", "UpdatedName");
  await webTable.verifyRecordExists("UpdatedName");

  // 4️⃣ Delete record
  await webTable.deleteRecordByEmail("test@mail.com");

  // Verify delete
  const deletedRow = webTable.rows.filter({ hasText: "test@mail.com" });
  await expect(deletedRow).toHaveCount(0);
});
