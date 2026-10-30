class BaseClass {
    constructor(page) {
        this.page = page;
    }

    async openURL(url) {
        await this.page.goto(url);
    }

    async getPageTitle() {
        return await this.page.title();
    }

    async getCurrentURL() {
        return this.page.url();
    }
}

export default BaseClass;