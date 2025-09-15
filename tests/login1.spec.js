import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

   await page.locator("//input[@placeholder='username']").fill("Admin")

   await page.locator("//input[@placeholder='password']").fill("admin123")

   await page.locator("//button[@type='submit']").click()

   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")



 
});