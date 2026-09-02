import { test, expect } from '@playwright/test';
test('login demo', async ({ page, context }) => {
    await page.goto('https://demo.applitools.com/');
    await page.pause();
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('dadada');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('dadada');
    await page.getByRole('link', { name: 'Sign in' }).click();
});