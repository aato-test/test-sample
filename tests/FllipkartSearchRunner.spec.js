import { test, expect } from '@playwright/test';
import FlipkartSearchPage from '../pages/FlipkartSearchPage.js';

test('Flipkart product search', async ({ page }) => {
    const flipkart = new FlipkartSearchPage(page);

    // Open website
    await flipkart.openFlipkart();

    // Search product
    await flipkart.searchProduct('laptop');

    // Validate search navigation
    await expect(page).toHaveURL(/\/search\?q=/);

    console.log('Page Title:', await flipkart.getPageTitle());
    console.log('Current URL:', await flipkart.getCurrentURL());

    console.log('Flipkart search test completed');
});