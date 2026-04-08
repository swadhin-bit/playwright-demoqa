import { test } from "@playwright/test";
import { Button } from "../pages/Button.js";

test.describe("DemoQA Buttons Automation", () => {
  let buttonPage;

  test.beforeEach(async ({ page }) => {
    buttonPage = new Button(page);
    await buttonPage.open();
  });

  test("Double Click Button", async () => {
    await buttonPage.doubleClickButton();
  });

  test("Right Click Button", async () => {
    await buttonPage.rightClickButton();
  });

  test("Dynamic Click Button", async () => {
    await buttonPage.dynamicClickButton();
  });
});
