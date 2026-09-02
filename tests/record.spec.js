import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');

test('codegen practice',async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await context.tracing.start({screenshots: true, snapshots: true});
  await page.goto('https://sauce-demo.myshopify.com/');
  await page.getByRole('link', { name: 'Sauce Demo' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Catalog' }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.locator('#main-menu').getByRole('link', { name: 'About Us' }).click();
  await page.getByRole('link', { name: 'Wish list' }).click();
  await page.getByRole('link', { name: 'Refer a friend' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Search' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'About Us' }).click();
  await page.getByRole('link', { name: 'Catalog' }).click();
  await page.getByRole('link', { name: 'Black heels Black heels £' }).click();
  await page.getByRole('link', { name: 'Log In' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('habdab@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('dadwada');
  // await page.getByRole('button', { name: 'Sign In' }).click();
  // await page.locator('div:nth-child(15) > div:nth-child(2)').click();
  // await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Skip Challenge, page 1 of' }).click();
  // await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Skip Challenge, page 1 of' }).click();
  // await page.locator('iframe[title="hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Skip Challenge, page 1 of' }).click();
  await page.goto('https://sauce-demo.myshopify.com/');
  await page.getByRole('link', { name: 'Grey jacket Grey jacket £' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: 'My Cart (0)' }).click();
  await page.goto('https://sauce-demo.myshopify.com/cart');
  // await page.getByRole('button', { name: 'Check Out' }).click();
  // await page.getByRole('link', { name: 'Cart' }).click();

  // ---------------------
  await context.tracing.stop({ path: 'Codegen_trace.zip' });
  await context.close();
  await browser.close();
});