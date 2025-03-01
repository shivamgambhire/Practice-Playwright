import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

    testDir: 'tests/e2e',       // Test files are in 'tests/e2e' directory
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        actionTimeout: 10000,
       
        video: 'off',
        screenshot: 'off',
    },
    retries: 2,
    projects: [
        {
            name: 'Chromium',
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