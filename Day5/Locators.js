import { test , expect } from "@playwright/test";
async function loginfields(page) {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator(`[id='username']`).fill("Demosalesmanager")
    await page.locator(`[id="password"]`).fill('crmsfa')
    await page.click(`[class="decorativeSubmit"]`) 
    await page.waitForTimeout(2000)
    await page.getByText('CRM/SFA', { exact: true }).click();
}

test("create", async({page})=>{
    await loginfields(page)
    //await page.getByText('CRM/SFA', { exact: true }).click(); 
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

test('edit a lead', async({page})=>{
    await loginfields(page)
    await page.waitForTimeout(2000)
    //await page.getByText('Leads', { exact: true }).nth(5).click();
    await page.locator(`//*[@id="ext-gen41"]/ul/li[2]/div/div/div/div/div/a`).click()
    //await page.getByRole('link', { name: 'Find Leads' }).click()
    await page.getByRole(`link` , {class: 'selected'}).nth(17).click()
    await page.locator(`//*[@id="ext-gen248"]`).fill('karan')
    await page.getByRole('link', { name: 'Find Leads' }).nth(4).click()
    await page.locator(`//*[@class="linktext"]`).nth(4).click()
    await page.getByRole(`link`, { name: 'Edit' }).click()
    const comname=await page.getByText(`Company Name`, { exact: true}).nth(2).click()
    await comname.fill('')
    await comname.fill('testleaf')
    const annualpay=await page.getByText(`Annual Revenue`, { exact: true}).click()
    await annualpay.fill('')
    await annualpay.fill(30000)
    const Department =await page.getByText(`Department`, { exact: true}).nth(1).click()
    await Department.fill(``)
    await Department.fill(mech)
    await page.locator(`//span[@class="tableheadtext"]`).nth(15).click()
    await page.locator(`//input[@id="ext-gen639"]`).click()
    await expect(page.locator(`span#viewLead_companyName_sp`)).toHaveText('testleaf')
    await expect(page.locator(`span#viewLead_annualRevenue_sp`)).toHaveText(30000)
    await expect(page.locator(`span#viewLead_departmentName_sp`)).toHaveText('mech')
    const pagetitle=await page.title()
    console.log(pagetitle)


})


