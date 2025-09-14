import { expect } from "@playwright/test"
import test,{ chromium } from '@playwright/test'


test('Creating an individual',async({page})=>{


    await page.goto("https://login.salesforce.com/")

 await page.waitForTimeout(2000)

    await page.getByLabel('Username').fill("anupkumar.t543@agentforce.com")
    await page.getByLabel('Password').fill("Test@salesforce2025")
    await page.locator("#Login").click()

       await page.waitForTimeout(12000)

         await page.locator("//div[@class='appLauncher slds-context-bar__icon-action']").click()
         await page.waitForTimeout(5000)
         await page.getByLabel('View All Applications').click()
         await page.locator("//li//span//p[contains(text(),'Individuals')]").click()
        await page.locator("(//a[@class='slds-truncate'])[1]").click()
          await page.waitForTimeout(3000)
        await page.getByRole('button',{name:'Edit'}).last().click() 
        await page.locator("(//a[contains(text(),'None')])[1]").click() 
       await page.waitForTimeout(1000)
       await page.locator("(//a[contains(text(),'Mr.')])[1]").click()

       
         await page.locator("(//div[@class='uiInput uiInputText uiInput--default uiInput--input'])[1]//input").fill("Rahul")

         await page.locator("(//button//span[contains(text(),'Save')])[2]").click()

         const first_Name = await page.locator("//slot//span[contains(text(),'Rahul')]")
        await expect(first_Name).toHaveText('Rahul Dravid');
        

        

         
})

