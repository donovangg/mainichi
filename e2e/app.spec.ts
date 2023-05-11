import { test, expect} from "@playwright/test";

test("should render season", async({ page }) => {
    // start from home page
    await page.goto('http://localhost:3000/');

    await expect(page.locator('h1')).toContainText('Bro')
})