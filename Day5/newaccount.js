import { test,expect } from "@playwright/test";

test("new account", async({page})=>{
    // const title= ""
    // const url = "https://orgfarm-4dc2e8d12d-dev-ed.develop.lightning.force.com/lightning/page/home"
    await page.goto("https://login.salesforce.com/")
    await page.getByLabel(`Username`).fill("udaya18udai318@agentforce.com")
    await page.getByLabel(`Password`).fill('Sales@123')
    await page.locator(`[id="Login"]`).click();
    console.log("Before title fetch");
    const pagetit=await page.title() 
    await expect(page).toHaveTitle(pagetit) //verify pagetitle
    console.log(await pagetit.textContent())
    const pageurl=await page.url()
    await expect(page).toHaveURL(pageurl) //verify pageurl
    await page.locator(`[class="slds-icon-waffle"]`).click() //click on App Launcher
    await page.getByText("View All" ,{ exact: true}).click() //click on viewall button
    await page.getByPlaceholder(`placeholder="Search apps or items..."`).fill("Service")
    await page.locator(`(//mark[text='Service'])[1]`).click()
    await page.locator(`[class="slds-truncate"]`).nth(5).click()
    await page.getByRole("link" , { title: "New"}).nth(8).click()
    await page.locator(`[class="slds-input"]`).fill("savings") //fill account 
    await page.locator(`//button[@name="SaveEdit"]`).click() //click save
    const message=page.locator(`//div[@class="forceVisualMessageQueue"]`)
    console.log(await message.textContent())
    await expect(message).toBeVisible()
})
