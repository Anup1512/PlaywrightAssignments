import { expect } from "@playwright/test"
import test,{ chromium } from '@playwright/test'


test('Creating a salesforce account',async({page})=>{


    await page.goto("https://login.salesforce.com/")

 await page.waitForTimeout(2000)

    await page.getByLabel('Username').fill("anupkumar.t543@agentforce.com")
    await page.getByLabel('Password').fill("Test@salesforce2025")
    await page.locator("#Login").click()

       await page.waitForTimeout(12000)

       // To verify the page title and Url

   //const title = await page.locator("//title[contains(text(),'Salesforce')]")
   await expect(page).toHaveTitle('Home | Salesforce')
   const title =await page.title()
   console.log(title)

   await expect(page).toHaveURL('https://orgfarm-503c21e0be-dev-ed.develop.lightning.force.com/lightning/page/home')
     console.log(page.url())

         await page.locator("//div[@class='appLauncher slds-context-bar__icon-action']").click()
         await page.waitForTimeout(5000)
         await page.getByLabel('View All Applications').click()
         await page.getByPlaceholder('Search apps or items...').fill('Service')
         await page.locator("(//p//mark[contains(text(),'Service')])[1]").click()
         await page.locator("//a[@title='Accounts']").click()
         await page.getByRole('button',{name:'New'}).click() 
     
         
         await expect(page.locator("(//div//div[@class='slds-form-element__control slds-grow'])[1]//input")).toBeEditable({ timeout: 120000 })

        
         await page.locator("(//div//div[@class='slds-form-element__control slds-grow'])[1]//input").fill("ABS consultants")

         const account_name = await page.locator("(//div//div[@class='slds-form-element__control slds-grow'])[1]//input").inputValue()


          await page.locator("//button[text()='Save']").click()

          
         const toast = await page.locator("(//div[@class='slds-theme--success slds-notify--toast slds-notify slds-notify--toast forceToastMessage']//div//span)[3]")
     
         expect(toast).toContainText(`Account "${account_name}" was created.`)
      
})


   
      
    









