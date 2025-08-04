import { test } from "@playwright/test";

test("edit lead", async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("//input[@class='inputLogin']").nth(0).fill("demosalesmanager")
    await page.locator(`//input[@id='password']`).fill("crmsfa")
    await page.click(`.decorativeSubmit`)
    await page.locator(`text='CRM/SFA'`).click()
    //await page.locator("//a[@id='ext-gen878']").click()
    await page.getByRole('link', { name: 'Leads' }).click()
    await page.waitForTimeout(3000)
    //await page.getByText('Create Lead').click();
    await page.getByRole('link', { name: 'Create Lead' }).click();
    await page.locator(`[id="createLeadForm_companyName"]`).fill("nse")
    await page.locator(`[id="createLeadForm_firstName"]`).fill("karan")
    await page.locator(`[id='createLeadForm_lastName']`).fill("kumar")
    await page.locator(`//input[@class='smallSubmit']`).click()
    await page.getByRole('link', { name: 'Edit' }).click()
    await page.locator(`[id="ext-gen589"]`).fill("bse")
    await page.click(`[value='Reassign']`)

})
