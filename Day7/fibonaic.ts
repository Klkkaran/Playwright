function fibonacci(n:number):number{
    if(n<=0){
        console.log("error")
        return 0
    }
    if(n==1){
        return 1
    }
    let a=0
    let b=1
    for(let i=0;i<=n;i++){
        const c=a+b
        console.log(c)
        if(c<=2){
            break
        }
        a=b
        b=c
 
    }
    return b
}
console.log(fibonacci(2))
console.log(fibonacci(0))
console.log(fibonacci(1))
