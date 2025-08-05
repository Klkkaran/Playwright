
import { test } from "@playwright/test";

test("edit individuals", async({page})=>{
    await page.goto("https://login.salesforce.com")
    await page.locator(`[id='username']`).fill("udaya18udai318@agentforce.com")
    await page.locator(`[id="password"]`).fill("Sales@123")
    await page.click(`[id="Login"]`)
    //await page.click(`[title="App Launcher"]`)
    await page.locator(`.slds-icon-waffle`).click()
    await page.locator(`[title='App Launcher']`).click()
    await page.click(`[aria-label="View All Applications"]`)
    await page.waitForTimeout(2000)
    await page.locator(`//a[@data-label="Individuals"]`).click()
    await page.getByPlaceholder("Search this list...").fill("kumar")
    await page.keyboard('Enter')
    await page.locator(`text="Show more actions"`).click()
    await page.getByTitle("Edit", { exact: true }).click();
    //await page.getByText('Mr.', { exact: true }).click();
    //await page.selectOption(`[data-proxy-id="aura-pos-lib-31"]`, `Mr.`)
    await page.locator(`//*[@id="11847:0"]`).click()
    await page.selectOption(`[title="Mr."]`)
    await page.locator(`[name="lastName"]`).fill("karan")
    await page.click(`[title="Save"]`)
    const updatedName = await page.locator('span.uiOutputText').first().textContent()
    expect(updatedName).toContain('Karan');

})
