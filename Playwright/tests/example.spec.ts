import { test, expect } from '@playwright/test';

test('Visit the website and make sure the URL is correct.', async ({ page }) => {
  await page.goto('https://www.clarity.cx/');
  
  await page.locator(`//li[@id='menu-item-1170']/a[1]`).click();

  await expect(page).toHaveURL('https://www.clarity.cx/contact-us/');
});


