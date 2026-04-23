import { test, expect } from "@playwright/test";
import { WebTablesPage } from "../pages/webTablesPage.js";

test("Add, Search, Update and Delete Web Table Record", async ({ page }) => {

  const webTable = new WebTablesPage(page);
  await webTable.navigate("/webtables", { timeout: 60000 }); // cleaner if baseURL is set

  // 1️⃣ Add record
  await webTable.addRecord("Swadhin", "Samal", "test@mail.com", "25", "35000", "QA");

  /*
  // 2️⃣ Search + verify
  await webTable.searchRecord("Cierra");
  await expect(webTable.searchBox).toHaveValue("Cierra");
  await expect(webTable.tableBody).toHaveValue("Cierra");
  await expect(webTable.tableBody).toHaveValue("Vega");
  await expect(webTable.tableBody).toHaveValue("cierra@example.com");

  // 3️⃣ Update record
  await webTable.updateRecordByEmail("cierra@example.com", "UpdatedName");
  await webTable.verifyRecordExists("UpdatedName");

  // 4️⃣ Delete record
  await webTable.deleteRecordByEmail("cierra@example.com");

  // Verify delete
  const deletedRow = webTable.rows.filter({ hasText: "cierra@example.com" });
  await expect(deletedRow).toHaveCount(0);*/
});
