import {test,expect} from "@playwright/test";

test("hello world", async({page}) => {

    await page.goto("https://google.com");

    await expect(page).toHaveTitle("Google");
    
    await console.log("hello world..")

});