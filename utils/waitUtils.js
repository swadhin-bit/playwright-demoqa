export async function waitForElement(page, locator) {
  await page.locator(locator).waitFor({ state: 'visible' });
}

export async function waitForDisappear(page, locator) {
  await page.locator(locator).waitFor({ state: 'hidden' });
}