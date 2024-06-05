import { test, expect } from '@playwright/test';

test('Open the website and make sure are important elements are visible.', async ({ page }) => {
  await page.goto('https://claritylabs-tst.cpq.cloud.sap/Login.aspx');

  // Ensure the username field is available and fill it
  const usernameField = page.locator(`input[name="ctl00$MainContentPlaceHolder$txtUsername"]`);
  await expect(usernameField).toBeVisible();
  await usernameField.fill("aleonenko");

  // Ensure the password field is available and fill it
  const passwordField = page.locator(`input[name="ctl00$MainContentPlaceHolder$txtPassword"]`);
  await expect(passwordField).toBeVisible();
  await passwordField.fill('StrongPassword123!');

  // Ensure the login button is available and click it
  const loginButton = page.locator(`input[type="submit"][name="ctl00$MainContentPlaceHolder$btnLogin"]`);
  await expect(loginButton).toBeVisible();
  await expect(loginButton).toBeEnabled();
  await loginButton.click();

  //Check if the URL is correct
  await expect(page).toHaveURL('https://claritylabs-tst.cpq.cloud.sap/Catalogue/CategoryTree.aspx');
  
  //Check if Buttons ‘Load Existing Project/Quotation’ is visible
  const existingProjectsButton = page.locator('a[href="/quotation/LoadQuote.aspx"][aria-label="Load Existing Project/Quotation"]');
  await expect(existingProjectsButton).toBeVisible();

  //Check if Button ‘Catalog’ is visible
  const catalogButton = await page.locator('a[href="/Catalogue/CategoryTree.aspx"][aria-label="Catalog"]');
  await expect(catalogButton).toBeVisible();

  //Check if Button 'Setup' is visible
  const setupButton = await page.locator('[aria-label="Setup"]').nth(0);
  await expect(setupButton).toBeVisible();
  
  //Check if Button 'Pet Products' is visible
  const petProductsButton = page.locator('h3[title="Drinks"][aria-label="Drinks"]');
  await expect(petProductsButton).toBeVisible();

});




