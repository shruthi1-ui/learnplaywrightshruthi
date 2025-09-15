import { test, expect } from '@playwright/test';

test('verify the login with  validcreadential', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

   await page.locator("//input[@placeholder='Username']").fill("Admin")

   await page.locator("//input[@placeholder='Password']").fill("admin123")

   await page.locator("//div[@class='oxd-form-actions orangehrm-login-action']").click()

   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")



 
});



test('verify the detials of validusername and invalidpassword', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

   await page.locator("//input[@placeholder='Username']").fill("Admin")

   await page.locator("//input[@placeholder='Password']").fill("admin123")

   await page.locator("//div[@class='oxd-form-actions orangehrm-login-action']").click()

   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible




 
});


test('verify login with invalidusername and validpassword', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

   await page.locator("//input[@placeholder='Username']").fill("Admin")

   await page.locator("//input[@placeholder='Password']").fill("ghjjfr")

   await page.locator("//div[@class='oxd-form-actions orangehrm-login-action']").click()

   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible



 
});

test('verify login with invalidusername and invalidpassword', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

   await page.locator("//input[@placeholder='Username']").fill("redfgyy")

   await page.locator("//input[@placeholder='Password']").fill("admin123")

   await page.locator("//div[@class='oxd-form-actions orangehrm-login-action']").click()

   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible



 
});


