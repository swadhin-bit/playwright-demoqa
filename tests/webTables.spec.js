import { test, expect } from "../fixtures/elements.fixture";

test.beforeEach(async ({ page }) => {
  await page.goto('/webtables');
  await expect(page.locator('#addNewRecordButton')).toBeVisible();
});

test("Full CRUD Web Table", async ({ webTablesPage }) => {

  const email = "test@mail.com";

  // 1️⃣ Add
  await webTablesPage.addRecord(
    "Swadhin",
    "Samal",
    email,
    "25",
    "35000",
    "QA"
  );

  /*
  // 2️⃣ Verify Add (NO search)
  await webTablesPage.verifyRecordExists(email);

  // 3️⃣ Update
  await webTablesPage.updateRecordByEmail(email, "UpdatedName");

  // Verify Update
  await webTablesPage.verifyRecordExists(email);
  await webTablesPage.verifyRecordExists("UpdatedName");

  // 4️⃣ Delete
  await webTablesPage.deleteRecordByEmail(email);

  // Verify Delete
  await webTablesPage.verifyRecordDeleted(email);

  */

});