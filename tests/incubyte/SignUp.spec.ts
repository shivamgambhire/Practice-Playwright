import {test,expect} from "@playwright/test";

test.describe.only("SignUp Flow", () => {

        test.beforeEach(async({page})=> {
            await page.goto("https://magento.softwaretestingboard.com/")
        })

        test("should navigate to sign up page", async ({page}) => {
            
            await page.click('text=Create an Account')

            //Assertion to verify the page title
            await expect(page.locator('.page-title')).toContainText("Create New Customer Account")

            //Filling the form with valid data
            await page.fill('#firstname', 'Shivam')
            await page.fill('#lastname', 'Gambhire')

            await page.fill('#email_address', 'shivamgambhire@gmail.com')
            await page.fill('#password', 'Password@123')

            await page.fill('#password-confirmation', 'Password@123')

            await page.click('text=Create an Account')

            //verify that acount is created
            //await expect(page.locator('.message-success.success.message')).toContainText("Thank you for registering with Main Website Store.")
            await expect(page.locator('.page-title')).toContainText("My Account")
        })

        test("Log out from account", async ({page}) => {

            await page.click("div[class='panel header'] button[type='button']")

            await page.click("text=Sign Out")

        })
    
})