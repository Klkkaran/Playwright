import { expect, test } from "@playwright/test";
import dotenv from "dotenv";
import { request } from "http";

dotenv.config({path:"Data/qa.env"})

let tokenc : any
let ins_url : any
let t_token : any
let c_id : any
let c_num : any
test.describe.serial("sequantial execute", async()=>{
test("case request",async({request})=>{
    const response = await request.post("https://login.salesforce.com/services/oauth2/token",{
        headers:{
            "Content-Type":"application/x-www-form-urlencoded"
        },
        form:{
        "client_id":"11",
        "client_secret":"FE9116332CD8C7802FB843953CA38F59F70C35740E6E581E2A0E13973946CF05",
        "grant_type":"password",
        "username":"karan@agentforce.com",
        "password":"Karankumar@!12"
        }
    })
    const tokrep = await response.json()
    console.log(tokrep)
    expect(response.status()).toBe(200)
    console.log(response.status())
    console.log(response.statusText())
    tokenc = tokrep.access_token
    ins_url = tokrep.instance_url
    t_token = tokrep.token_type

})

test("case post creation",async({request})=>{
    const ressponse = await request.post(`${ins_url}/services/data/v62.0/sobjects/Case`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${t_token} ${tokenc}`
        },data:{
                "status":"Escalated",
                "Origin":"Email"
        }
    })
    const cres = await ressponse.json()
    console.log(ressponse)
    console.log(ressponse.status())
    expect(ressponse.statusText()).toBe("Created")
    c_id  = cres.id
})

test("get case info",async({request})=>{
    const fcase = await request.fetch(`${ins_url}/services/data/v62.0/sobjects/Case${c_id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${t_token} ${tokenc}`
        }
    })
    const fcaser = await fcase.json()
    console.log(fcase)
    console.log(fcase.status())
    console.log(fcase.statusText())
    c_num = fcaser.CaseNumber
})

test("sales login",async({page})=>{
    await page.goto(process.env.q_url as string)
    await page.locator(`#username`).fill(process.env.l_username as string)
    await page.locator(`#password`).fill(process.env.l_password as string)
    await page.click(`#Login`)
    await page.locator(`//button[@title="App Launcher"]`).click()
    await page.getByText(`View All`,{ exact: true }).click()
    const sale = page.getByPlaceholder(`Search apps or items...`)
    await sale.fill("sales")
    await sale.press("Enter") //unable to directly using press in page.press need to find text -> stor in varibale->use press
    await page.locator(`//mark[@contains(text()="Sales")]`).click()
    const casetext = page.locator(`text='Cases'`) //first finding the text cases in dashboard
    await expect(casetext).toBeVisible() // text is visible or not 
    await casetext.click()
    await page.getByPlaceholder(`Search this list...`).fill('c_num')
    await page.keyboard.press('Enter')
    await page.locator(`//span[text()='` + c_num + `']`).click()
    await page.locator(`//button[@name="Edit"]`).click()
    await page.getByRole(`combobox`, { name: `Status` }).click()
    await page.locator(`//span[text()='Working']`).click()
    await page.getByRole(`combobox`, { name:`Priority` }).click()
    await page.locator(`//span[text()='Low']`).click()
    await page.getByRole(`combobox`, { name: `Case Origin` }).click()
    await page.locator(`//span[text()='Phone']`).click()
    await page.getByRole(`combobox`, { name: `SLA Violation` }).click()
    await page.locator(`//span[text()='No`).click()
    await page.locator(`//button[@name="SaveEdit"]`).click()
    await page.waitForSelector(".toastMessage", { state: "visible" });
    await page.pause() //will freeze the page
    const toastMessage = await page.locator(".toastMessage").textContent()
    console.log(toastMessage)
    await expect(page.locator(`.toastMessage`)).toHaveText("Case is Edited Successfully and Status is working")

})

test("case delete",async({request})=>{
    const dele = await request.delete(`${ins_url}/services/data/v62.0/sobjects/Case${c_id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${t_token} ${tokenc}`   
        }
    })
    expect(dele.status()).toBe(204)
    expect(dele.statusText()).toBe("No Content")
    console.log(dele.status())
    

})
})
