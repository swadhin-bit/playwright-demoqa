import{test, expect} from "../fixtures/elements.fixture";

test.beforeEach(async ({ page }) => {
  await page.goto('/broken');
  await expect(page.getByRole('link',{ name: 'Click Here for Valid Link' })).toBeVisible();
  await expect(page.getByRole('link',{ name: 'Click Here for Valid Link' })).toBeEnabled();
  await expect(page.getByRole('link',{ name: 'Click Here for Broken Link' })).toBeVisible();
  await expect(page.getByRole('link',{ name: 'Click Here for Broken Link' })).toBeEnabled();
});

test('Check broken link status', async ({ brokenLinksPage }) => {

    const status = await brokenLinksPage.checkBrokenLinkStatus();
    console.log(`Broken link status: ${status}`);

    expect(status).toBeGreaterThanOrEqual(400); // 400+ = broken
});
