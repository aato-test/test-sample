import BaseClass from '../base/BaseClass.js';

class FlipkartSearchPage extends BaseClass {
    constructor(page) {
        super(page);

        this.searchBox = page.locator('input[name="q"]').first();
    }

    async openFlipkart() {
        await this.openURL('https://www.flipkart.com/');
    }

    async searchProduct(productName) {
        await this.searchBox.waitFor({
            state: 'visible',
            timeout: 15000
        });

        await this.searchBox.fill(productName);

        await this.searchBox.press('Enter');

       await this.page.waitForURL(/\/search\?q=/);
    }
}

export default FlipkartSearchPage;