import { test ,expect } from '../Fixtures/login';

test("Login", async ({loginPage }) =>
{
    await expect(loginPage.locator('h1')).toHaveText("Logged In Successfully");
})