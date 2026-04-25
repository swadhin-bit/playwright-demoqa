import{test, expect} from "../fixtures/testBase";

test.beforeEach(async ({ page }) => {
  await page.goto('/broken');
});

test('Check broken link status', async ({ brokenLinksPage }) => {

    const status = await brokenLinksPage.checkBrokenLinkStatus();
    console.log(`Broken link status: ${status}`);

    expect(status).toBeGreaterThanOrEqual(400); // 400+ = broken
});
