import {test,expect} from '@playwright/test'

test.describe("IFrame Locator and Practice", () => {

    test.beforeEach("Navigate to URL", async ({ page }) => {
        await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced");
    });

    test("IFrame Locators - Fill & Save Batch", async ({ page }) => {
        const name = "Kishore";
        const iFrame = page.frameLocator("#practice-iframe");
        await iFrame.getByRole("textbox", {name:"Batch Name"}).fill(name);
        await iFrame.getByRole("button", { name: "Save Batch" }).click();
        await expect(iFrame.getByText(`Result: ${name} saved`)).toBeVisible();
    });
});