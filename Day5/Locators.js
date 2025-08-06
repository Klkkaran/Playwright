import { test , expect } from "@playwright/test";
async function loginfields(page) {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator(`[id='username']`).fill("Demosalesmanager")
    await page.locator(`[id="password"]`).fill('crmsfa')
    await page.click(`[class="decorativeSubmit"]`) 
    await page.waitForTimeout(2000)
}

test("create", async({page})=>{
    await loginfields(page)
    await page.getByText('CRM/SFA', { exact: true }).click(); 
    //await page.getByRole('textbox', { name: 'Leads' }).click();
    //await page.getByLabel('Leads').click();
    await page.waitForTimeout(2000)
    await page.getByText('Leads', { exact: true }).click();
    await page.getByRole('link', { name: 'Create Lead' }).click()
    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill('lulumall')
    await page.locator(`//input[@class="inputBox"]`).nth(2).fill('karan')
    await page.locator(`[id="createLeadForm_lastName"]`).fill('kumar')
    await page.locator(`[id="createLeadForm_personalTitle"]`).fill("mr")
    await page.locator(`input[name="generalProfTitle"]`).fill("playwright")
    await page.locator(`[id="createLeadForm_annualRevenue"]`).fill("2000")
    await page.locator(`[id="createLeadForm_departmentName"]`).fill("QA")
    await page.locator(`[id="createLeadForm_primaryPhoneNumber"]`).fill('8764689293')
    await page.click(`//input[@class="smallSubmit"]`)
    const firstname=await page.getByText('karan', { exact: true}).innerText()
    const lastname=await page.getByText('kumar', {exact: true}).innerText()
   //nst comname=await page.getByText('lulumall',{exact: true}).innerText()
    const staus=await page.getByText('Assigned', { exact: true}).innerText()
    console.log(firstname)
    console.log(lastname)
    console.log(staus)
    const pagetit=await page.title()
    console.log(pagetit)
    await page.waitForTimeout(5000)
    await expect(page.locator(`span#viewLead_companyName_sp`)).toHaveText('lulumall')
})
