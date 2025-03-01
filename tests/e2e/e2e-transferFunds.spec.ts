import {test,expect} from "@playwright/test";

test.describe("Login Logout Flow", () => {
    //before each

    test.beforeEach(async({page})=> {
        await page.goto("https://zero.webappsecurity.com/login.html")  //wesite url
    })

    test("should login with valid credentials", async ({page}) => {

        await page.fill('#user_login', 'username')
    })

});
