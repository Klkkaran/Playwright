function launchBrowser(){
    var browserName="edge"
    if(browserName == 'edge'){
        console.log('welcome to edge')
    }
    else{
        console.log('Eror')
    }
}
launchBrowser()

function runTests(testType){
    switch(true){
        case testType=='sanity':
            console.log("sanitytesting")
            break
        case testType=='smoke':
            console.log('smoke testing')
            break
        case testType=='regression':
            console.log('regression')
            break
        default:
            console.log('functionality')
    }
}
runTests('smoke')
