import{test,expect} from "@playwright/test";


test('login in to facebook',async({page}) => {

    await page.goto("https://www.facebook.com/")
	
	await page.locator("#email").fill("shivam")
	await page.locator("#pass").fill("securepassword")
	
	await page.locator("button[name='login']").click()


	await expect(page).toHaveTitle("Facebook")	// successful title of page

})