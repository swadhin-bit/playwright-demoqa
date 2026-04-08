import { BasePage } from "./BasePage";

export class Links extends BasePage {
  constructor(page) {
    super(page);

    // Simple links
    this.homeLink = page.locator('#simpleLink'); // use unique id to avoid strict mode issues

    // API links map
    this.apiLinks = {
      Created: page.getByRole('link', { name: 'Created' }),
      'No Content': page.getByRole('link', { name: 'No Content' }),
      Moved: page.getByRole('link', { name: 'Moved' }),
      'Bad Request': page.getByRole('link', { name: 'Bad Request' }),
      Unauthorized: page.getByRole('link', { name: 'Unauthorized' }),
      Forbidden: page.getByRole('link', { name: 'Forbidden' }),
      'Not Found': page.getByRole('link', { name: 'Not Found' }),
    };

    // Response message
    this.linkResponse = page.locator('#linkResponse');
  }

  // Click Home link and return new page
  async clickHomeLink(context) {
    const newPagePromise = context.waitForEvent('page');
    await this.homeLink.click();
    const newPage = await newPagePromise;
    await newPage.locator('body').waitFor(); // wait for DOM to be ready
    return newPage;
  }

  // Click API link by name
  async clickApiLink(linkName) {
    if (!this.apiLinks[linkName]) throw new Error(`Link ${linkName} not found`);
    await this.click(this.apiLinks[linkName]);
  }

  // Get response text
  async getResponseText() {
    return await this.getText(this.linkResponse);
  }
}
