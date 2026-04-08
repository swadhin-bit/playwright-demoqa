import { BasePage } from "./BasePage";

export class BrokenLinks extends BasePage {
    constructor(page) {
        super(page);

        this.validLink = page.getByRole('link', { name: 'Click Here for Valid Link' });
        this.brokenLink = page.getByRole('link', { name: 'Click Here for Broken Link' });
    }

    async clickValidLink() {
        await this.validLink.click();
    }

    async clickBrokenLink() {
        await this.brokenLink.click();
    }

    async checkBrokenLinkStatus() {
  const href = await this.brokenLink.getAttribute('href');
  const response = await this.page.request.get(href);
  return response.status();
}

}
