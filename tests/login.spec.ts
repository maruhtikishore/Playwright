import { test, expect } from '@playwright/test';
test.describe("Login", () => {
    test.beforeEach("Navigate to URL",async({page}) => {
        await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic");
    })


    test("Login Validation", async ({ page }) => {
       // await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic');

        // Single Click
        await expect.soft(page.getByTestId('single-click-btn')).toHaveText("Single Click")
        await page.getByTestId('single-click-btn').click()
        await expect(page.getByTestId('single-click-status').getByText('Single click completed.')).toHaveText("Single click completed.")
        await expect(page.getByText('Single click completed.')).toHaveText('Single click completed.')


        // Double Click
        await expect(page.getByTestId('double-click-btn')).toHaveText("Double Click")
        await page.getByTestId('double-click-btn').click()
        await expect(page.getByTestId('double-click-status')).toHaveText('Double:Waiting for double click.Pending')
        await page.getByTestId('double-click-btn').dblclick();
        await expect(page.getByTestId('double-click-status')).toHaveText('Double:Double click completed.Completed')

        //Hover
        await expect(page.getByTestId('hover-btn')).toHaveText("Hover Target")
        await expect(page.getByTestId('hover-status')).toHaveText('Hover:Hover target not triggered.Pending')
        await page.getByTestId("hover-btn").hover()
        await expect(page.getByTestId('hover-status')).toHaveText('Hover:Hover triggered successfully.Completed')

        //ToolTip
        await expect(page.getByTestId("tooltip-trigger-btn")).toHaveText("Tooltip")
        await expect(page.getByTestId("hover-tooltip-status")).toHaveText("Tooltip:Tooltip not verified.Pending")
        await page.getByTestId("tooltip-trigger-btn").hover();
        await expect(page.getByTestId("hover-tooltip")).toHaveText("Tooltip verified")
        await expect(page.getByTestId("hover-tooltip-status")).toHaveText("Tooltip:Tooltip verified successfully.Completed")

        //DropDown

        //await page.getByLabel("Static Dropdown Practice")
        //await expect(page.getByTestId("")).toHaveText("")
        await expect(page.getByLabel('Static Dropdown Practice')).toBeVisible();
        // await expect(page.getByTestId("static-practice-select")).toHaveText("Easy - Basic locator targeting")
        // await expect(page.getByTestId("static-practice-select")).toHaveText("Medium - Filter and chaining")
        // await expect(page.getByTestId("static-practice-select")).toHaveText("Hard - Dynamic waits and assertions")
        const options = await page.getByTestId('static-practice-select').locator('option').allTextContents();
        expect(options).toEqual([
            'Select practice level',
            'Easy - Basic locator targeting',
            'Medium - Filter and chaining',
            'Hard - Dynamic waits and assertions'
        ]);
        await expect(page.getByTestId("static-dropdown-status")).toHaveText("Static Dropdown:Static dropdown not selected.Pending")
        const selectedValue = await page.getByTestId("static-practice-select").inputValue();
        expect(selectedValue).not.toBe('NA');
        await page.getByTestId("static-practice-select").selectOption('Easy')
        await expect(page.getByTestId("static-dropdown-status")).toHaveText("Static Dropdown:Static dropdown selected: Easy.Completed")
        await page.waitForTimeout(1000)
    })
    test("Screenshot", async ({page}) => {
        //await page.goto("https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic");
        await page.screenshot({path:'scrennshot1.png'});
        await page.screenshot({path:"screenshot2.png", fullPage: true})
        await page.getByTestId("single-click-btn").screenshot({path:"screenshot3.png"})

    })

    //CheckBox
    test("CheckBox",async({page})=>
    {
        //await page.getByTestId("remember-checkbox").check()
        await page.getByRole("checkbox",{name:"Remember preference"}).click()
        await expect(page.getByTestId("remember-checkbox")).toBeChecked()
        //await expect(page.getByTestId("remember-checkbox")).not.toBeChecked()
        
    })

    //DropDown or combobox

   test("DropDown or ComboBox", async({page}) =>
{
    await page.getByRole("combobox",{name:"Static Dropdown Practice"}).selectOption("Easy - Basic locator targeting");
    await expect(page.getByRole("combobox",{name:"Static Dropdown Practice"}).locator('option:checked')).toHaveText("Easy - Basic locator targeting")
    await expect(page.getByRole("combobox",{name:"Static Dropdown Practice"}).locator('option:checked')).not.toContainText(["Medium - Filter and chaining","Hard - Dynamic waits and assertions"])
   
})

//text Box , DropDown ,Checkbox and Radio Button

test("text Box , DropDown ,Checkbox and Radio Button",async({page})=>
{
  await page.getByRole("textbox",{name:"Email"}).fill("Kishore2912@gmail.com");
  await expect(page.getByRole("textbox",{name:"Email"})).toHaveValue("Kishore2912@gmail.com")
  await page.getByRole("textbox",{name:"Learner Name"}).fill("Kishore")
  await expect(page.getByRole("textbox",{name:"Learner Name"})).toHaveValue("Kishore")

  await page.getByRole("combobox",{name:"Track"}).selectOption("Playwright Core");
  await expect(page.getByRole("combobox",{name:"Track"}).locator("option:checked")).toHaveText("Playwright Core")
  await expect(page.getByRole("combobox",{name:"Track"}).locator("option:checked")).not.toContainText(["API + UI","CI/CD + Framework"])

  await page.getByRole("checkbox",{name:"Remember preference"}).check()

  await page.getByRole("radio",{name:"UI Mode"}).check()
  await expect(page.getByRole("radio",{name:"UI Mode"})).toBeChecked()
  // await page.getByRole("radio",{name:"API Mode"}).uncheck()  
  await expect(page.getByRole("radio",{name:"API Mode"})).not.toBeChecked()

  await expect(page.getByTestId("form-status")).toHaveText("Form:Form not submitted.Pending")
  await page.getByRole("button",{name:"Submit Practice Form"}).click();
  await expect(page.getByTestId("form-status")).toHaveText("Form:Kishore submitted (Kishore2912@gmail.com) for Playwright Core.Completed")

})

test("Static Waits, Keyboard",async({page})=>{

    await expect(page.getByTestId("async-status")).toHaveText("Async:Async action not started.Pending");
    await page.getByRole("button",{name:"Load Async Result"}).click();
    await expect(page.getByTestId("async-status")).toHaveText('Async:Loading async result...In Progress')
   // await page.waitForTimeout(40000);
   // await expect(page.getByTestId("async-status")).toHaveText("Async:Async action not started.Completed");

    await page.getByRole("textbox",{name:"Command Input (press Enter)"}).fill("Kishore");
    await expect(page.getByTestId("keyboard-status")).toHaveText("Keyboard:Press Enter in the command input.Pending")
    await page.getByRole("textbox", { name: "Command Input (press Enter)" }).press("Enter");
      await expect(page.getByTestId("keyboard-status")).toHaveText("Keyboard:Command submitted: KishoreCompleted")


})
    
})

