import { test, expect } from "@playwright/test";
import { TextBoxPage } from "../pages/TextBoxPage.js";

test("Fill Text Box Form", async ({ page }) => {

  const textBox = new TextBoxPage(page);

  await textBox.navigate("/text-box", { timeout: 60000 }); // cleaner if baseURL is set
  await textBox.removeAds(); // cleaner if baseURL is set

  await textBox.fillForm(
    "Swadhin Samal",
    "swadhin@example.com",
    "Kendrapara",
    "Odisha"
  );

  await textBox.verifyOutputContains("Swadhin Samal");
  await textBox.verifyOutputContains("swadhin@example.com");
  await textBox.verifyOutputContains("Kendrapara");
  await textBox.verifyOutputContains("Odisha");

});
