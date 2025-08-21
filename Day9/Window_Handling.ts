import { expect, test } from "@playwright/test";

test("multiple window handling", async({context,page})=>{
    const username = "Demosalesmanager"
    const password = "crmsfa"
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator(`#username`).fill(username)
    await page.getByLabel(`Password`).fill(password)
    await page.locator(`//input[@value="Login"]`).click()
    await page.locator(`//div[@id="label"]`).click()

   // const newp = await context.waitForEvent('page')
    await page.locator(`//a[text()="Leads"]`).click()
    await page.getByRole("link",{name: 'Merge Leads'}).click()
    //page.getByText("Leads").nth(5).click()
    //const newp1 = await newp
    await page.waitForTimeout(2000)
    //console.log(await newp1.title())
    await page.waitForSelector(`//a[text()='Merge']`, { state: `visible` }) //wait until the merge section is visible
    const newp = await context.waitForEvent('page')
    await page.locator(`//*[text()='From Lead']/../following-sibling::td/a`).click() //from lead
    const newp1 = await newp
    await newp1.waitForSelector(`text='Find Leads'`, { state: 'visible' })
    await newp1.locator(`(//table[@class="x-grid3-row-table"])[1]/tbody/tr[1]/td[1]//a`).click()//first id from lead
    await page.waitForTimeout(2000)
    const newpp = await context.waitForEvent('page')
    await page.locator(`//input[@id="partyIdTo"]/following::a[1]`).click() //to lead click 
    const newp2=await newpp
    await newp2.locator(`(//table[@class='x-grid3-row-table'])[2]/tbody/tr[1]/td[1]//a`) //first id To lead
    await page.waitForSelector(`//a[text()='Merge']`, { state: `visible` })
    await page.locator(`//a[@text()="Merge"]`).click()
    page.once('dialog', alertT=>{
        const Alerttype1 = alertT.type()
        console.log(Alerttype1)
        console.log(alertT.message())
        alertT.accept()
    })
    await page.locator(`//a[@text()="Merge"]`).click()
    const pagetitle = await page.title()
    //expect(pagetitle).toContain("")
    

    
    
})
