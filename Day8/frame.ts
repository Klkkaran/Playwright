import { expect, test } from "@playwright/test";

test("interact with frames", async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml")
    // const ifrmeurl= page.frame({url:"https://leafground.com/default.xhtml"})
    // await ifrmeurl?.locator("#Click").click()
    const firstname=page.frameLocator(`iframe[src='default.xhtml']`)
    const buttonvalue=firstname.locator("#Click")
    await buttonvalue.click()
    await expect(buttonvalue).toContainText("Hurray! You Clicked Me.")
    const alframes=page.frames()
    const frameslength=alframes.length
    console.log(`the total number of frames ${frameslength}`)
    const seconframe = page.frameLocator(`iframe[src='framebutton.xhtml']`)
    const seconvalue=seconframe.locator(`#Click`)
    await seconvalue.click()
    console.log(await seconvalue.locator(`#Click`).innerText())
    await expect(seconvalue).toContainText("Hurray! You Clicked Me.")
    // const nestframe = page.frame({name:'frame2'})
    // const nestclick = nestframe?.locator(`#Click`)
    // await nestclick?.click()
    // console.log(nestframe.locator(`#Click`).innerText())
    // await expect(nestclick).toContainText(`Hurray! You Clicked Me.`)
    await page.waitForTimeout(2000)
    

})
