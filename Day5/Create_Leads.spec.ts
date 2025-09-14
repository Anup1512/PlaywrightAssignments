import { expect } from "@playwright/test"
import test,{ chromium } from '@playwright/test'


test('Creating leads',async({page})=>{



    await page.goto("http://leaftaps.com/opentaps/control/main")


    await page.locator('#username').fill("Demosalesmanager")
    await page.locator("[name='PASSWORD']").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

       await page.waitForTimeout(5000)

       await page.locator("//div//a[contains(text(),'CRM/SFA')]").click()
       await page.locator("//a[text()='Create Lead']").click()

      await page.locator("//td//input[@name='companyName']").fill("AlphaBeta")
await page.waitForTimeout(2000)

      await page.locator("//td//input[@name='firstName']").fill("Sourav")
      
await page.waitForTimeout(2000)

      await page.locator("//td//input[@name='lastName']").fill("Ganguly")
      await page.waitForTimeout(2000)

      await page.locator("//td//input[@name='personalTitle']").fill("Mr")
      await page.locator("//td//input[@name='generalProfTitle']").fill("Ganguly")

      await page.waitForTimeout(2000)
      await page.locator("//td//input[@name='annualRevenue']").fill("750000")
      await page.locator("//td//input[@name='departmentName']").fill("Product")

      await page.waitForTimeout(2000)
     await page.locator("(//td//input[@name='primaryPhoneNumber'])[4]").fill("9962078493")
      await page.locator("//td//input[@value='Create Lead']").click()





const firstName = await page.locator("#viewLead_firstName_sp")
 await expect(firstName).toHaveText('Sourav');

const LastName=  await page.locator("#viewLead_lastName_sp")
 await expect(LastName).toHaveText('Ganguly');


const Status = await page.locator("#viewLead_statusId_sp")
 await expect(Status).toHaveText('Assigned');

 const title =await page.title()
   console.log(title)
})


   
      
    









