import {test,expect} from "@playwright/test";

test("Multiple Browser pages tabs test", async({browser}) => {

    const context = await browser.newContext()  // Create a new browser context

    const pageTestAuto = await context.newPage()    // Create a new page in the context
    // Navigate to the first URL
    await pageTestAuto.goto("https://practicetestautomation.com/practice-test-login/")

    const pageGoogle = await context.newPage()
    await pageGoogle.goto("https://google.com")

    const pageExample = await context.newPage()
    await pageExample.goto("https://example.com")


})