import { expect, test } from "@playwright/test";




let token : any
let tok_type : any
let inst_url: any
let idc : any
test.describe.serial("squential execute", async()=>{

test("creating and fetch", async({request})=>{
    const respo = await request.post(`https://login.salesforce.com/services/oauth2/token`,
        {
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            },form:{
        "client_id":"0543978",
        "client_secret":"67098",
        "grant_type":"password",
        "username":"karanle.com",
        "password":"Kar12"
        }
    })
    const respB = await respo.json()
    expect(respo.status()).toBe(200)
    console.log(respo.status())
    console.log(respo.statusText())
    token=respB.access_token
    inst_url=respB.instance_url
    tok_type=respB.token_type
})

test("create a opportinty", async({request})=>{
    const respons = await request.post(`${inst_url}/services/data/v59.0/sobjects/Opportunity/`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${tok_type} ${token}`
        },data:{
            "Name":"love",
            "StageName":"Opportunity1",
            "CloseDate":"2025-09-12"
        }
    })
    const response = await respons.json()
    console.log(response)
    console.log(respons.status())
    console.log(respons.statusText())
    idc = response.id
})

test("upadte th opportunity", async({request})=>{
    const response = await request.patch(`${inst_url}/services/data/v59.0/sobjects/Opportunity/${idc}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${tok_type} ${token}`
        },data:{
            "Type": "NewCustomer",
            "StageName":"Prospecting"
        }
    })
    console.log(response.status())
    console.log(response.statusText())

})

test("get the updated data",async({request})=>{
    const response = await request.get(`${inst_url}/services/data/v59.0/sobjects/Opportunity/`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${tok_type} ${token}`
        }
    })
    const respon = await response.json()
    console.log(respon)
    console.log(response.status())
    console.log(response.statusText())
})
 test("delete first record", async({request})=>{
    const deleteid = "006gL00000AjhB7QAJ"
    const responseB=await request.delete(`${inst_url}/services/data/v59.0/sobjects/Opportunity/${deleteid}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${tok_type} ${token}`   
        }
    })
    expect(responseB.status()).toBe(204)
    expect(responseB.statusText()).toBe("No Content")
})

test("get the updateda",async({request})=>{
    const response = await request.get(`${inst_url}/services/data/v59.0/sobjects/Opportunity/`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${tok_type} ${token}`
        }
    })
    const respon = await response.json()
    console.log(respon)
    console.log(response.status())
    console.log(response.statusText())
})

})
