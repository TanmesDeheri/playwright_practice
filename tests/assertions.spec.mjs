import {test,expect} from '@playwright/test';
test('assertions', async ({page}) => {
    await page.goto('https://kitchen.applitools.com/');
    await page.pause();
    //assertions
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);
    if(await expect(page.$('text=The Kitchen')))
    {
        await page.locator('text=The Kitchen').click();
    }
    await expect(page.locator('text=The Kitchen')).toBeVisible();    
   // await expect.soft(page.locator('text=The Kitchen')).toBeHidden();
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
   // await expect.soft(page.locator('text=The Kitchen')).toBeDisabled(); 
   await expect(page).toHaveURL('https://kitchen.applitools.com/');
   await expect(page).toHaveTitle(/.*Kitchen/);
   await expect(page).toHaveScreenshot();   
});