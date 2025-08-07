import { chromium, test } from "@playwright/test";

test("Login",async()=>{
    
    const browser = await chromium.launch() //launch chrome
    const text = await browser.newContext() //open new window
    const page  = await text.newPage() //open a page
    await page.goto("https://login.salesforce.com/")
    await page.locator(`//input[@id="username"]`).fill("udaya18udai318@agentforce.com")
    await page.locator(`[id="password"]`).fill("Sales@123")
    await page.click(`input[name="Login"]`)
    await page.waitForTimeout(10000)
    const pagetitle = await page.title()
    console.log(pagetitle)
    const pageurl = await page.url()
    console.log(pageurl)
})
