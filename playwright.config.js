import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    // Match test runner files
    testMatch: '**/*.spec.js',

    // Run tests sequentially
    fullyParallel: false,
    workers: 1,

    // Timeout for each test
    timeout: 30000,

    // Retry failed tests in CI
    retries: process.env.CI ? 2 : 0,

    // Reporter configuration
    reporter: [
        ['list'],
        ['html', { open: 'never' }]
    ],

    use: {
        browserName: 'chromium',
        headless: false,
        viewport: { width: 1366, height: 768 },

        // Capture screenshot only on failure
        screenshot: 'only-on-failure',

        // Record trace on retry
        trace: 'on-first-retry'
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        }
    ]
});