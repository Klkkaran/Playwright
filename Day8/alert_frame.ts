import { expect, test } from "@playwright/test";
test("frame interact", async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    await page.waitForTimeout(2000)
    

    page.on('dialog', alertw3=>{
        const alertconfirm=alertw3.type()
        console.log(alertconfirm)
        console.log(alertw3.message())
        alertw3.accept()
        page.waitForTimeout(2000)
        // if(alertconfirm=='Confirm'){
            //alertw3.accept()
        // }else{
        //     alertw3.dismiss()
        // }
    })
    const frame1 = page.frameLocator(`#iframeResult`)
    const frame2 = frame1.getByText('Try it')
    await frame2.click()
    await page.waitForTimeout(2000)
    const frame3 = page.frameLocator("#iframeResult").locator("#demo")
    const textValue = await frame3.textContent()
    console.log(textValue)
    expect(textValue).toContain("You pressed OK!")
})
