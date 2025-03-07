import {test,expect} from "@playwright/test";
import { LoginPage } from "../../Page-objects/LoginPage"    //importing LoginPage class from Page-objects-model folder

test.describe.parallel.only("Login Logout Flow", () => {
    //before each
    let loginpage: LoginPage
    

    test.beforeEach(async({page})=> {
        loginpage = new LoginPage(page)

        await loginpage.visitLoginPage()        //calling visitLoginPage method from LoginPage class Page Object Model

        //await page.goto("https://practicetestautomation.com/practice-test-login/")  //wesite url
    })

    //login negative test case
    test("Negative scenario - Both input wrong", async({page})=> {
        
        await loginpage.login("wrong password", "admin")  //calling login method from LoginPage class Page Object Model

        //await page.fill('#username', "admin")
        //await page.fill('#password', "admin")

        //await page.click('text=Submit')      //Login button using click method

        await loginpage.assertErrorMessageUsername()  //calling assertErrorMessage method from LoginPage class Page Object Model

        //const errorMessage = await page.locator('.show')
        //await expect(errorMessage).toContainText("Your username is invalid!")

    })

    //login with wrong password and right username

    test("negative scenario - wrong password", async({page}) => {
        
        await loginpage.login("student", "admin")  //calling login method from LoginPage class Page Object Model
        
        // await page.fill('#username', "student")
        // await page.fill('#password', "admin")

        // await page.click('text=Submit')      //Login button using click method

        await loginpage.assertErrorMessagePassword()  //calling assertErrorMessage method from LoginPage class Page Object Model

        // const errorMessage = await page.locator('.show')
        // await expect(errorMessage).toContainText("Your password is invalid!")
    })

    //login positive test case
    
    test("Positive Scenario - Right credientials", async({page})=> {
        
        await loginpage.login("student", "Password123")  //calling login method from LoginPage class Page Object Model
        // await page.fill('#username', "student")
        // await page.fill('#password', "Password123")

        // await page.click('text=Submit')      //Login button using click method

        //verify new URL after login
        const newURL = await page.url()
        await expect(newURL).toBe("https://practicetestautomation.com/logged-in-successfully/")

        //verify login message successfully
        const successMsg = await page.locator('.post-title')
        await expect(successMsg).toContainText("Logged In Successfully")

        
        
    })


})

