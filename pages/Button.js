import { BasePage } from "./BasePage.js";

export class Button extends BasePage {
    constructor(page) {
        super(page);

        // Locators
        this.doubleClickBtn = page.locator("#doubleClickBtn");
        this.rightClickBtn = page.locator("#rightClickBtn");
        this.dynamicClickBtn = page.getByRole("button", { name: "Click Me", exact: true });

        this.doubleClickMsg = page.locator("#doubleClickMessage");
        this.rightClickMsg = page.locator("#rightClickMessage");
        this.dynamicClickMsg = page.locator("#dynamicClickMessage");

        // Messages
        this.doubleClickSuccessMsg = "You have done a double click";
        this.rightClickSuccessMsg = "You have done a right click";
        this.dynamicClickSuccessMsg = "You have done a dynamic click";
    }

    async open(url = "https://demoqa.com/buttons") {
        await this.navigate(url);
        await this.removeAds();
    }

    async doubleClickButton() {
        await this.dblClick(this.doubleClickBtn);
        await this.assertText(this.doubleClickMsg, this.doubleClickSuccessMsg);
    }

    async rightClickButton() {
        await this.rightClick(this.rightClickBtn);
        await this.assertText(this.rightClickMsg, this.rightClickSuccessMsg);
    }

    async dynamicClickButton() {
        await this.click(this.dynamicClickBtn);
        await this.assertText(this.dynamicClickMsg, this.dynamicClickSuccessMsg);
    }
}
