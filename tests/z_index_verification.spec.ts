import { test, expect } from '@playwright/test';

test('verify z-index of buttons', async ({ page }) => {
  await page.goto('http://localhost:5173');

  const yesBtn = page.locator('.yes-btn');
  const noBtn = page.locator('.no-btn');

  // Wait for the buttons to be visible
  await expect(yesBtn).toBeVisible();
  await expect(noBtn).toBeVisible();

  // Check computed z-index
  const yesZIndex = await yesBtn.evaluate((el) => window.getComputedStyle(el).zIndex);
  const noZIndex = await noBtn.evaluate((el) => window.getComputedStyle(el).zIndex);

  console.log(`Yes button z-index: ${yesZIndex}`);
  console.log(`No button z-index: ${noZIndex}`);

  expect(Number(yesZIndex)).toBeGreaterThan(Number(noZIndex));
});
