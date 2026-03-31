import { test as base, expect,Page } from '@playwright/test';

type MyFixture = {
    loginPage: Page;
};

export const test = base.extend<MyFixture>({
    loginPage: async ({ page }, use) => {
       await page.goto("https://practicetestautomation.com/practice-test-login/")
       await page.locator('[name="username"]').fill("student");
       await page.locator('[name="password"]').fill("Password123")
       await page.locator('[class="btn"]').click()
        await use(page);
    }
});
export { expect }; 