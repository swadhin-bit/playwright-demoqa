import { test, expect } from "../fixtures/elements.fixture";

test.beforeEach(async ({ page }) => {
  await page.goto('/webtables');
});


test("Verify Web Table ", async ({ webTablesPage }) => {

   // 1️⃣ Add record
  await webTablesPage.addRecord("Swadhin", "Samal", "test@mail.com", "25", "35000", "QA");

  /*
  // 2️⃣ Search + verify
  await webTablesPage.searchRecord("Cierra");
  await expect(webTablesPage.searchBox).toHaveValue("Cierra");
  await expect(webTablesPage.tableBody).toHaveValue("Cierra");
  await expect(webTablesPage.tableBody).toHaveValue("Vega");
  await expect(webTablesPage.tableBody).toHaveValue("cierra@example.com");

  // 3️⃣ Update record
  await webTablesPage.updateRecordByEmail("cierra@example.com", "UpdatedName");
  await webTablesPage.verifyRecordExists("UpdatedName");

  // 4️⃣ Delete record
  await webTablesPage.deleteRecordByEmail("cierra@example.com");

  // Verify delete
  const deletedRow = webTablesPage.rows.filter({ hasText: "cierra@example.com" });
  await expect(deletedRow).toHaveCount(0);*/

});

