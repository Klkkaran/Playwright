import { test,expect } from "@playwright/test";
import fs from "fs";
test("file upload", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    const upload1 = page.waitForEvent("filechooser")
    page.locator(`//div[@id="drag-drop-upload"]`).click()
    const upload2 = await upload1
    await upload2.setFiles(`Data/kksk.png`)

    await page.waitForTimeout(2000)
    // page.getByText("✔")
    await expect(page.locator(`(//div[@id="drag-drop-upload"]//span)[2]`)).toHaveText('✔')

})

test.only("file download", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/download")
    const pagedow=page.waitForEvent("download")
    page.locator(`//a[text()="Testcase1_hubspot-crm.xlsx"]`).click()
    const filedo = await pagedow
    const filesuces = `Data/first.xlsx`
    await filedo.saveAs(filesuces)
    await page.waitForTimeout(2000)
    //verifying downloaded or not 
    expect(fs.existsSync(filesuces)).toBeTruthy();



})
