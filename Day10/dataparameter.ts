import { test } from "@playwright/test";
import dotenv from "dotenv"
import { parse } from "csv-parse/sync"
import fs from "fs"

dotenv.config({path:"Data/qa.env"})

//using env file
test("data parameter", async({page})=>{
    console.log(process.env.q_url)
    await page.goto(process.env.q_url as string)
    await page.locator(`#username`).fill(process.env.l_username as string)
    await page.locator(`#password`).fill(process.env.l_Password as string)
    await page.click(`//input[@value="Login"]`)
    await page.click(`//a[contains(text(),'CRM')]`)
    await page.locator(`//a[contains(text(),'Leads')]`).click()
    await page.locator(`//a[contains(text(),'Create Lead')]`).click()
    await page.locator(`#createLeadForm_companyName`).fill(process.env.c_name as string)
    await page.locator(`#createLeadForm_firstName`).fill(process.env.f_name as string)
    await page.locator(`#createLeadForm_lastName`).fill(process.env.l_name as string)
    ///await page.locator(`//td[@id="ext-gen566"]//option[4]`).click()
    await page.selectOption(`#createLeadForm_dataSourceId`,{ label: "Direct Mail" })
    await page.selectOption(`#createLeadForm_marketingCampaignId`,{ value : "DEMO_MKTG_CAMP"})
    const countof =  page.locator(`#createLeadForm_marketingCampaignId > option`) //. Get the count and print all the values in the Marketing Campaign dropdown
    const constcount = await countof.count()
    console.log(constcount)
    //Select General Services from the Industry dropdown using index
    await page.selectOption(`#createLeadForm_industryEnumId`,{index : 7})
    await page.selectOption(`#createLeadForm_currencyUomId` , {value : "INR"}) 
    await page.selectOption(`#createLeadForm_generalCountryGeoId`, {value :"IND"})
    await page.waitForTimeout(2000)
    await page.selectOption(`#createLeadForm_generalStateProvinceGeoId`,{label : "ANDHRA PRADESH"})
    

    const statec = page.locator(`#createLeadForm_generalStateProvinceGeoId > option`)
    const statecount = await statec.count()
    console.log(statecount)

    await page.locator(`//input[@name="submitButton"]`).click()

})

//using csv file

let datacsv:any = parse(fs.readFileSync("Data/dataparameter.csv"),{
    columns:true,
    skip_empty_lines:true
})
test.only(`data using csv file ${datacsv[0].tcid}`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    console.log(datacsv[0].tcid)
    await page.locator(`#username`).fill(datacsv[0].p_username)
    await page.locator(`#password`).fill(datacsv[0].p_password)
    await page.click(`//input[@value="Login"]`)
})


