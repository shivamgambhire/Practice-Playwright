import {test,expect} from "@playwright/test";

test.describe("practice tests", () => {
    
    test("parameterrized tests with array", async({page}) =>{
        
        const userNames = ["shivam", "jhon","sam", "Ana"]

        for(const name of userNames){
            await page.goto("http://zero.webappsecurity.com/index.html")

            await page.locator("#searchTerm").fill(`${name}`)
            await expect(page.locator("#searchTerm")).toHaveValue(`${name}`);
        }


    })



})