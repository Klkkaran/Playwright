import{test, expect, chromium} from '@playwright/test'

test("title" , async()=>{
    
    //const browser = await chromium.launch({headless:true})
    const browser = await chromium.launch({channel: 'msedge'})
    const text = await browser.newContext()
    const page = await text.newPage()
    await page.goto("https://www.redbus.in")
    let title = await page.title()
    let link = await page.url()
    console.log(title)
    console.log(link)

})
