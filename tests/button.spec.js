import { time } from "node:console";
import {test, expect} from "../fixtures/testBase";

test.beforeEach(async ({ page }) => {
  await page.goto('/buttons', { timeout: 10000 });
});

test("Buttons", async ({ buttonsPage }) => {
  await buttonsPage.doubleClickButton();
  await buttonsPage.rightClickButton();
  await buttonsPage.dynamicClickButton();
});

