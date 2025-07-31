//example 1
let s = "hello world"
let charsep =s.split("")
console.log(charsep)
let wordsep=s.split(" ")
console.log(wordsep)

let lastword=wordsep[wordsep.length-1]
console.log(lastword)

let lastword1=lastword.length
console.log("The last word is \"World\"  with length " +lastword1)

//example2
let s1= " fly me to the moon"
let trimwords =s1.trim()
console.log(trimwords)

let trimsplit=trimwords.split(" ")
console.log(trimsplit)
let lastchar=trimsplit[trimsplit.length-1]
console.log(lastchar)
let lastlength=lastchar.length
console.log("The last word is \"moon\" with length "+lastlength)

//example3

function isAnagram(str,str1){
    let sa1 = str.replace(/\s/g).toLowerCase()
    let sa2 = str1.replace(/\s/g).toLowerCase()
    let sortwords = sa1.split("").sort().join()
    let sortwords1 = sa2.split("").sort().join()
    return sortwords == sortwords1
}
let r1 = isAnagram("listen","silent")
let r2 = isAnagram('hello', 'world')
console.log(r1)
console.log(r2)
