import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'off',
    },
    retries: 0,
    testDir: 'tests/visual-testing',
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' },
        },
    ],
    reporter: [['html', { outputFolder: 'test-results' }]],   // Generate reports
    timeout: 30000,
};

export default config;