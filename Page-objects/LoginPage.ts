import { expect, Locator, Page } from "@playwright/test";

export class LoginPage{
    //Define locators
    readonly page: Page;
    readonly username : Locator;
    readonly password : Locator;
    readonly submitButton : Locator;
    readonly errorMessage : Locator;

    //Init selectors using constructor
    constructor(page:Page){
        this.page = page;
        this.username = page.locator('#username')
        this.password = page.locator('#password')
        this.submitButton = page.locator('#submit')
        this.errorMessage = page.locator('.show')

    }
    //define login page methods 

    async visitLoginPage(){
        await this.page.goto("https://practicetestautomation.com/practice-test-login/")
    }

    async login(username: string, password: string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.submitButton.click()
    }

    async assertErrorMessageUsername(){
        await expect(this.errorMessage).toContainText("Your username is invalid!")
    }

    async assertErrorMessagePassword(){
        await expect(this.errorMessage).toContainText("Your password is invalid!")
    }

}