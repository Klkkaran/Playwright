function student(score){
    switch(true){
        case score>52:{
            console.log('A+ grade')
            break
        }
        case score>35:{
            console.log('A+ grade')
            break
        }
        case score<30:{
            console.log('c grade')
            break
        }
        case score<10:{
            console.log('F grade')
            break
        }
        default:
            console.log('invalid score')
    }
}
let result = student(29)
console.log(result)




