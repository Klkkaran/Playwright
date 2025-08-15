function factorial(n: number): number{
    if (n==0){
        console.log("error")
    }
    if (n<=0){
        console.log("0 and less than 0 not acept")
        return 0
    }
    let fact: number
    fact = 1
    while(n>=1){
        
        let fact1=fact*n
        console.log(fact1)
        fact=fact1
        n--
        
    }return fact

}
console.log(factorial(5))
console.log(factorial(0))
console.log(factorial(-9))
