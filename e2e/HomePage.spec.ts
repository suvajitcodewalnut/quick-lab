// Modules
import { expect, test } from "@playwright/test";

test("Homepage", async ({ page }) => {
	await page.goto("https://labquick-beta.vercel.app/");
	// Verifying the page url
	await expect(page).toHaveURL("https://labquick-beta.vercel.app/");
	// Verifying the page title of the application
	await expect(page).toHaveTitle("QUICKLAB");

	await page.close();
});
