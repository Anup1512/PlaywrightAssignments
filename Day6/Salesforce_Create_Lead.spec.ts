import { expect } from "@playwright/test"
import test,{ chromium } from '@playwright/test'


test('Creating a salesforce lead',async({page})=>{


    await page.goto("https://login.salesforce.com/")

 await page.waitForTimeout(2000)

    await page.getByLabel('Username').fill("anupkumar.t543@agentforce.com")
    await page.getByLabel('Password').fill("Test@salesforce2025")
    await page.locator("#Login").click()

      // await page.waitForTimeout(12000)

         await page.locator("//div[@class='appLauncher slds-context-bar__icon-action']").click()
         await page.waitForTimeout(5000)
         await page.getByLabel('View All Applications').click()
         await page.locator("//span//p[text()='Sales']").click()
         await page.locator("//a[@title='Leads']").click()
         
         await page.getByRole('button',{name:'New'}).click() 
        // await page.waitForTimeout(12000)
             
       await page.locator("(//span[contains(text(),'None')])[7]").click()

       //await page.getByRole('button',{name:'none'}).first().click() 
       await page.waitForTimeout(1000)
       await page.locator("(//span[contains(text(),'Mr.')])[1]").click()

       await page.getByPlaceholder('Last Name').fill("Dravid")
      await page.locator("//div//input[@name='Company']").fill("Indian industires")
      await page.locator("(//button[contains(text(),'Save')])[3]").click()

      //await page.waitForTimeout(8000)
      
        await page.locator("//a[@title='Leads']").click()
      const LeadName = await page.locator("//div//a//slot//span[text()='Dravid']")
 await expect(LeadName).toHaveText('Dravid');


      //div//a//slot//span[text()='Dravid']

      
        
/*  To compare expected message with actual message
const Expected="Account"+ ${account_name}+ "was created"
const Actual = await page.locator("//div//div[contains(text(),'"+${Expected}+"')]")


 function verifytoast(Actual:string, Expected:string)
 {
  

if(Actual===Expected)
{
  console.log("This test case has been passed")
}
else{
  console.log("This test case is failed")
}

 }

 verifytoast(Actual,Expected)*/
            
})



   
      
    









