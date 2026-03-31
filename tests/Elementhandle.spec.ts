

import {test,chromium} from '@playwright/test'

test.describe("Multiple Tab Browsing",()=>
{
    test("Multi-tab Handling", async({}) => {

        //Launch Browser   const browser = await chromium.launch() 


        const browser = await chromium.launch()
        
        //Create two independent Context  const context1 =await browser.newContext()  , const context2= await browser.newContext()
        const content1= await browser.newContext()
        const content2= await browser.newContext()

        //Create two new pages const page1= await content1.newPage(), const page2= await context2.newPage()
        const page1= await content1.newPage()
        const page2= await content2.newPage()

        //Create the URL

        await page1.goto("")
        await page2.goto("")

        //Close the URL

        await content1.close()
        await content2.close()
        await browser.close()



    })
})