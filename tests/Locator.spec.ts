import {test,expect} from '@playwright/test'

test.describe("Locator Pratice",() =>{
    
    test.beforeEach("Navigate to the URL",async({page}) =>
    {
       await page.goto("file:///K:/Automation/Locators/locatorPractice%20(1).html");
    })

    test("1.Locator", async({page}) =>{
    
    await expect(page.getByText("Playwright Locators Practice")).toBeVisible()
    await expect(page.getByText('1) Roles & Text')).toBeVisible();
    await page.getByRole('button',{name:'Save'}).nth(0).click()
    await expect(page.getByText('Status: Ready')).toBeVisible()


    await page.getByRole('button',{name:'Save'}).nth(1).click();
    await expect(page.getByText('Status: Pending')).toBeVisible()

    await page.getByRole('button',{name:'Cancel'}).click();
    await expect(page.getByText('Status: Done')).toBeVisible();

    await page.getByRole('link',{name:'Go to Dashboard'}).click()


})


 test("Forms (Label + Placeholder)",async({page}) =>{

    await expect(page.getByText("2) Forms (Label + Placeholder)")).toBeVisible()
    await page.getByRole('textbox',{name:'Email Address'}).fill("maruthikishore751@gmail.com")
    await page.getByRole('textbox',{name:'Password'}).fill("Kishore2912")
    await page.getByRole('checkbox',{name: 'I agree to the Terms'}).click()
    await page.getByRole('checkbox',{name:' I agree to the Terms'}).isChecked()
    await page.getByRole('combobox',{name:'Country'}).selectOption({label:'India'})
    //await page.getByRole('combobox',{name:'Country'}).selectOption('in')
    await page.getByRole('button',{name:'Submit Form'}).click()
    // await page.getByTestId('submit-form').click()

 })


 test("Alt Text & Title", async({page}) =>{
 
    await expect(page.getByRole('heading',{name:'Alt Text & Title'})).toBeVisible()
    await expect(page.getByRole('img',{name:'Company Logo'})).toBeVisible()
    await page.getByRole('button',{name:'Close'}).click() // image arail label 
 })


test("Test IDs",async({page})=>
{
    await expect(page.getByRole('heading',{name:'4) Test IDs'})).toBeVisible()
    await expect(page.getByRole('heading',{name:'Product A'})).toBeVisible()  
    await page.getByRole('button',{name:'Add to cart'}).nth(0).click()
    await expect(page.getByRole('heading',{name:'Product B'})).toBeVisible()
    await page.getByRole('button',{name:'Add to cart'}).nth(1).click()
    await expect(page.getByRole('heading',{name:'Product C'})).toBeVisible()
    await page.getByRole('button',{name:'Add to cart'}).nth(2).click()
})

test("Chaining & Filtering",async({page})=>
{
    await expect(page.getByRole('heading',{name:'5) Chaining & Filtering'})).toBeVisible()
    await expect(page.getByRole('heading',{name:'Arun'})).toBeVisible()
    await expect(page.getByText('Role: Admin')).toBeVisible()
    await page.getByRole('button',{name:'View'}).nth(0).click()
    await page.getByRole('button',{name:'Delete'}).nth(0).click()

    await expect(page.getByRole('heading',{name:'Divya'})).toBeVisible()
    await expect(page.getByText('Role: Editor')).toBeVisible()
    await page.getByRole('button',{name:'View'}).nth(1).click()
    await page.getByRole('button',{name:'Delete'}).nth(1).click()

    await expect(page.getByRole('heading',{name:'Meera'})).toBeVisible()
    await expect(page.getByText('Role: Viewer')).toBeVisible()
    await page.getByRole('button',{name:'View'}).nth(2).click()
    await page.getByRole('button',{name:'Delete'}).nth(2).click()

})


test("Dialog (role=dialog)",async({page})=>{

    await expect (page.getByRole("button",{name:'Open Dialog'})).toBeVisible()
    await page.getByRole("button",{name:'Open Dialog'}).click()
    await expect(page.getByRole("heading",{name:'Profile Dialog'})).toBeVisible()
    await expect(page.getByLabel('Name')).toBeVisible()
    await page.getByRole('textbox',{name:'Name'}).fill('Kishore')
    await page.getByRole('button',{name:'Cancel'}).nth(1).click()
    await page.getByRole('button',{name:'Save'}).nth(2).click()
})
})


