import { expect } from "@playwright/test"
import test,{ chromium } from '@playwright/test'


test('Editting leads',async({page})=>{


    await page.goto("http://leaftaps.com/opentaps/control/main")

 await page.waitForTimeout(2000)

    await page.locator('#username').fill("Demosalesmanager")
    await page.locator("[name='PASSWORD']").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

       await page.waitForTimeout(5000)

       await page.locator("//div//a[contains(text(),'CRM/SFA')]").click()
       
      await page.locator("//div//a[text()='Leads']").click()
       await page.locator("//div//a[text()='Find Leads']").click()

       await page.waitForTimeout(5000)
       await page.getByRole('textbox', { name: 'First name:' }).fill("Rahul")
       await page.locator("//button[text()='Find Leads']").click()

        
       // To Click on the first resulting Lead ID
       await page.locator("(//table//tbody//tr[1]//td[1]/div/a)[1]").click()


        await page.locator("//div//a[contains(text(),'Edit')]").click()

         await page.locator("//td//input[@name='companyName']").fill("Gamma")
        await page.waitForTimeout(2000)

      await page.locator("//td//input[@name='annualRevenue']").fill("850000")
      await page.locator("//td//input[@name='departmentName']").fill("Delivery")
      await page.locator("//td//textarea[@id='updateLeadForm_description']").fill("To edit created lead")
      await page.locator("//td//input[@value='Update']").click()
      

      


// To verify the editted the fields
const CompName = await page.locator("#viewLead_companyName_sp")
 await expect(CompName).toHaveText('Gamma (13489)')

const Revenue =  await page.locator("#viewLead_annualRevenue_sp")
 await expect(Revenue).toHaveText('$850,000.00')

const Dept = await page.locator("#viewLead_departmentName_sp")
 await expect(Dept).toHaveText('Delivery')

 const description = await page.locator("#viewLead_description_sp")
 await expect(description).toHaveText('To edit created lead')

 

 const title =await page.title()
   console.log(title)
})


   
      
    









