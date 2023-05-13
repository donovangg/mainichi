import { test, expect } from "@playwright/test";

test("bookmark button function", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByTestId("bookmark-btn").click;

  await expect(page.locator('button:text("added")'));
});