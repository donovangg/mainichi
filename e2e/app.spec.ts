import { test, expect} from "@playwright/test";

test("Watching link should send you to watchlist", async({ page }) => {
    // start from home page
    await page.goto('http://localhost:3000/');

    await expect(page.locator('h3')).toContainText('simulcasts')

    await page.click('text=Watching');

    await expect(page).toHaveURL('http://localhost:3000/watchlist');

    await expect(page.locator('h1')).toContainText("Your watchlist")
})