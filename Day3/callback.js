let browser = "chrome"
function checkBrowserVersion(callback){
    console.log("welcome")
    setTimeout(()=>{
        callback(browser)
        console.log("hello")
    },2000)
}
function checkbrowser(n){
    console.log("browser name : " +n)
}
checkBrowserVersion(checkbrowser)
