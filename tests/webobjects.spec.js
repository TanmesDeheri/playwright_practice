//import{test,expect} from'@playwright/test';
const { test, expect } = require('@playwright/test');
test('webobjects',async({page,context})=>{
    await context.tracing.start({screenshots:true,snapshots:true});
    await page.goto('https://www.saucedemo.com/');
    await page.locator('id=user-name').fill('standard_user');
    await page.locator('id=password').fill('secret_sauce');
    await page.locator('id=login-button').click();
    await context.tracing.stop({path:'webobjects.zip'});
});