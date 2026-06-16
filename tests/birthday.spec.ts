import { test, expect } from '@playwright/test';

test('birthday invitation app', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Check if the title is present
  await expect(page.locator('h1')).toHaveText('Happy Birthday to My Dear! Should we go out together?');

  const yesBtn = page.locator('.yes-btn');
  const noBtn = page.locator('.no-btn');

  // Get initial positions
  const yesBoxBefore = await yesBtn.boundingBox();
  const noBoxBefore = await noBtn.boundingBox();

  // Hover over the "No" button
  await noBtn.hover();

  // Give some time for state update
  await page.waitForTimeout(500);

  // Get positions after hover
  const yesBoxAfter = await yesBtn.boundingBox();
  const noBoxAfter = await noBtn.boundingBox();

  // Check if buttons moved
  expect(yesBoxAfter?.x).not.toBe(yesBoxBefore?.x);
  expect(yesBoxAfter?.y).not.toBe(yesBoxBefore?.y);
  expect(noBoxAfter?.x).not.toBe(noBoxBefore?.x);
  expect(noBoxAfter?.y).not.toBe(noBoxBefore?.y);

  // Click the "Yes" button
  await yesBtn.click();

  // Check if celebration message appears
  await expect(page.locator('.celebration-msg h2')).toHaveText("Yay! I'm so happy! 🎂✨");

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png' });
});
