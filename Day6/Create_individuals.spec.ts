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
        await page.getByRole('button',{name:'New'}).click() 
         await page.getByPlaceholder('Last Name').fill("Dravid")
         await page.locator("(//button//span[contains(text(),'Save')])[2]").click()

          const Ind_Name = await page.locator("(//span[text()='Dravid'])[3]")
 await expect(Ind_Name).toHaveText('Dravid');

         
})

    