//import the test and expect from '@playwright/test'
import {test,expect} from "@playwright/test"

//code for write test case take full page snapshot and compair it with exiting snapshot
test.describe.parallel("Full page Spanshot", () => {
    
    //full page screenshot
    test("should be full page snapshot", async({page})=>{

        await page.goto("https://example.com/")
        await expect(await page.screenshot()).toMatchSnapshot("example.png")
    })

    //single element screenshot
    test("should be single element snapshot", async({page}) => {

        await page.goto("https://example.com/")
        await expect(await page.locator("h1").screenshot()).toMatchSnapshot("example-h1.png")
    })


})
