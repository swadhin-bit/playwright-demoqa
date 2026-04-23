import{test, expect} from "@playwright/test";

import { BrokenLinks } from "../pages/BrokenLinks";

test('Check broken link status', async ({ page }) => {
    const brokenPage = new BrokenLinks(page);

    await brokenPage.navigate('/broken');

    const status = await brokenPage.checkBrokenLinkStatus();
    console.log(`Broken link status: ${status}`);

    expect(status).toBeGreaterThanOrEqual(400); // 400+ = broken
});
