import {test,expect} from '@playwright/test';
test('eater selection',async({page})=>{
    await page.goto('https://kitchen.applitools.com/')
    if(await expect(page.getByRole('link', { name: 'Links' })).toBeVisible())
    {
        await page.getByRole('link', { name: 'Links' }).click();
        await page.getByRole('link', { name: 'Eater.com' }).click();
        if(await expect(page.getByRole('link', { name: 'A Harry Styles Super Fan’s' })).toBeVisible())
        {
            await page.getByRole('link', { name: 'A Harry Styles Super Fan’s' }).click();
        }
    }
});