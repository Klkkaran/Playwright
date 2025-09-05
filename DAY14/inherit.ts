class Browser{
    browserName : any
    browserVersion : any
    constructor(browserName : any, browserVersion: any){
         this.browserName = browserName
         this.browserVersion = browserVersion
    }
    openURL(url : string) : void{
        console.log(`${this.browserName} was executing this ${url} `)

    }
    closeBrowser(){
        console.log("after executing close the browser")

    }
    navigateBack(){
        console.log(` ${this.browserName} navigate back`)
    }

}

class Chrome extends Browser{
    constructor(browserName : any, browserVersion: any) {
    super("Chrome", "1234");
  }
     openIncognito() {
        console.log("incognito tab")

     }
     clearCache() {
        console.log("clear cache")

     }

}

class Edge extends Browser{
    constructor(version: string) {
    super("Edge", version);
  }
     takeSnap() {
        console.log("take snap shoot")

     }
     clearCookies(){
        console.log("clear cookies")

     }

}

class Firefox extends Browser{
    constructor(version: string) {
    super("firefox", version);
  }
     readerMode(){
        console.log("read the data")
        
     }
      fullScreenMode(){
        console.log("full screen")

      }

}

const chrome = new Chrome("Chrome","23.77")
chrome.openIncognito()
chrome.clearCache()
chrome.openURL("www.google.com")
chrome.closeBrowser()
chrome.navigateBack()
