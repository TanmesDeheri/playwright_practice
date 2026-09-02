import {test,exec} from 'playwright@latest'
test('eater selection',async(page)=>{
    await page.goto('https://kitchen.applitools.com/')
    if(await expect(page.locator('text=links')))
    {
        await page.locator('text=Links').click();
    }
});