import {test, expect} from "@playwright/test";

test.describe(() => {

    test("Search Product with given input", async({page})=> {
        
        await page.goto("https://www.automationexercise.com/")      //navigate to the website

        await page.click('text=Products')   //click on product menu

        //await expect(page).toBe("https://www.automationexercise.com/products")  //verify the URL

        await page.fill('#search_product', 'Tops')
        await page.locator('#submit_search').click()

        await expect(page.locator('.title')).toContainText("Searched Products")  //verify the product name

        await expect(page).toBe("https://www.automationexercise.com/products?search=Tops")  //verify the URL after search
    })
})