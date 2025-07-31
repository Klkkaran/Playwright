
function fetchdata(){
    return new Promise((resolve,reject) =>{
        console.log("data")
    setTimeout(() => {
        const data = true
        if(data === true){
            resolve("Data fetched successfully!")
        }
        else{
            reject("Data not found!")
        }

    },3000)
})
}
fetchdata().then(response =>{
    console.log(response)
}).catch(error=>{
    console.log(error)
})
