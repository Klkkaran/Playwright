import {test , expect, firefox } from '@playwright/test'

test("titleurl", async()=>{
    const browser1= await firefox.launch()
    const context = await browser1.newContext()
    const page = await context.newPage()
    await page.goto("https://www.flipkart.com")
    let title1 = await page.title()
    let link1 = await page.url()
    console.log(title1)
    console.log(link1)
})
