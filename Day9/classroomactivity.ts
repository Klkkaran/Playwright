import { test } from "@playwright/test";
test("sequential window handling", async({context, page})=>{
    await page.goto("https://leafground.com/window.xhtml")
    await page.waitForTimeout(2000)
    const creatingpromise=context.waitForEvent('page') //creating apromise to load child page
    await page.locator(`//button[@id="j_idt88:new"]`).click()
    const childpage=await creatingpromise
    await childpage.waitForTimeout(3000)
    console.log(await childpage.title())
    await childpage.getByPlaceholder(`Write your message...`).fill("karan is bay boyyyy")
    await childpage.waitForTimeout(5000)
    await childpage.close()

})
