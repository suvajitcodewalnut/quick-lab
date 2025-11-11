// Modules
import { expect, test } from "@playwright/test";

test.describe("Add Ticket Functionality", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
		await page.waitForLoadState("networkidle");
	});

	test("should open add ticket modal when clicking Add ticket button", async ({
		page,
	}) => {
		await page.getByRole("button", { name: /add ticket/i }).click();

		await expect(page.getByText("CREATE NEW TICKET")).toBeVisible();

		await expect(page.locator("#title")).toBeVisible();
		await expect(page.locator("#description")).toBeVisible();
		await expect(page.locator("#assignee")).toBeVisible();
		await expect(page.locator("#priority")).toBeVisible();
	});

	test("should successfully add a new ticket with valid data", async ({
		page,
	}) => {
		await page.getByRole("button", { name: /add ticket/i }).click();

		await page.locator("#title").fill("Bug Fix");
		await page
			.locator("#description")
			.fill("Fix the login authentication issue");
		await page.locator("#assignee").fill("developer@example.com");
		await page.locator("#priority").fill("HIGH");

		await page.getByRole("button", { name: /submit/i }).click();

		await expect(page.getByText("TICKET CREATED SUCCESSFULLY!")).toBeVisible();

		await expect(page.getByText("Bug Fix")).toBeVisible();
		await expect(page.getByText("developer@example.com")).toBeVisible();
	});

	test("should show validation error for title less than 3 characters", async ({
		page,
	}) => {
		await page.getByRole("button", { name: /add ticket/i }).click();

		await page.locator("#title").fill("AB");
		await page
			.locator("#description")
			.fill("This is a valid description with more than ten characters");
		await page.locator("#assignee").fill("test@example.com");
		await page.locator("#priority").fill("MEDIUM");

		await page.getByRole("button", { name: /submit/i }).click();

		await expect(
			page.getByText(/Title must be at least 3 characters long!/i),
		).toBeVisible();
	});

	test("should show validation error for description less than 10 characters", async ({
		page,
	}) => {
		await page.getByRole("button", { name: /add ticket/i }).click();

		await page.locator("#title").fill("Valid Title");
		await page.locator("#description").fill("Short");
		await page.locator("#assignee").fill("test@example.com");
		await page.locator("#priority").fill("LOW");

		await page.getByRole("button", { name: /submit/i }).click();

		await expect(
			page.getByText(/Description must be at least 10 characters!/i),
		).toBeVisible();
	});

	test("should show validation error for invalid email format", async ({
		page,
	}) => {
		await page.getByRole("button", { name: /add ticket/i }).click();

		await page.locator("#title").fill("Valid Title");
		await page.locator("#description").fill("This is a valid description");
		await page.locator("#assignee").fill("invalid-email");
		await page.locator("#priority").fill("HIGH");

		await page.getByRole("button", { name: /submit/i }).click();

		await expect(
			page.getByText(/Please provide a valid email address!/i),
		).toBeVisible();
	});

	test("should show validation error for invalid priority", async ({
		page,
	}) => {
		await page.getByRole("button", { name: /add ticket/i }).click();

		await page.locator("#title").fill("Valid Title");
		await page.locator("#description").fill("This is a valid description");
		await page.locator("#assignee").fill("test@example.com");
		await page.locator("#priority").fill("URGENT");

		await page.getByRole("button", { name: /submit/i }).click();

		await expect(
			page.getByText(/Priority must be either HIGH, MEDIUM or LOW/i),
		).toBeVisible();
	});

	test("should close modal when clicking close button", async ({ page }) => {
		await page.getByRole("button", { name: /add ticket/i }).click();

		await expect(page.getByText("CREATE NEW TICKET")).toBeVisible();
		await page.locator("#button-form-close").first().click();

		await expect(page.getByText("CREATE NEW TICKET")).not.toBeVisible();
	});

	test("should add multiple tickets successfully", async ({ page }) => {
		await page.getByRole("button", { name: /add ticket/i }).click();
		await page.locator("#title").fill("First Ticket");
		await page.locator("#description").fill("Description for the first ticket");
		await page.locator("#assignee").fill("user1@example.com");
		await page.locator("#priority").fill("HIGH");
		await page.getByRole("button", { name: /submit/i }).click();

		await expect(page.getByText("TICKET CREATED SUCCESSFULLY!")).toBeVisible();

		await page.waitForTimeout(500);

		await page.getByRole("button", { name: /add ticket/i }).click();
		await page.locator("#title").fill("Second Task");
		await page
			.locator("#description")
			.fill("Description for the second ticket");
		await page.locator("#assignee").fill("user2@example.com");
		await page.locator("#priority").fill("MEDIUM");
		await page.getByRole("button", { name: /submit/i }).click();
	});

	test("should accept different priority values (case-insensitive)", async ({
		page,
	}) => {
		await page.getByRole("button", { name: /add ticket/i }).click();
		await page.locator("#title").fill("Low Case");
		await page.locator("#description").fill("Testing lowercase priority");
		await page.locator("#assignee").fill("test@example.com");
		await page.locator("#priority").fill("low");
		await page.getByRole("button", { name: /submit/i }).click();

		await expect(page.getByText("TICKET CREATED SUCCESSFULLY!")).toBeVisible();
		await expect(page.getByText("Low Case")).toBeVisible();
	});
});
