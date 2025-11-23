// let s=0

// for (let i=0;i<=100;i++){
//     if(i%2===0){
//         s+=i                // s+=i  == s=s+i    // s*=i   ==  s=s*i
//     }
// }
// console.log(s

// Control statements
// ----------------------------
// loops
// conditional statements
// Transfer statements (break,continue)

// for(let i=1;i<=10;i++){
//     if(i===5){
//         break
//     }
//     console.log(i)
// }

// for(let i=1;i<=10;i++){
//     if(i===5){
//         continue
//     }
//     console.log(i)
// }

// let pin=1234
// let success=true

// for (let i=1;i<=3;i++){
//     let val=prompt("Enter your pin :")
//     if(val==pin){
//         console.log("Congratulations")
//         success=false
//         break
//     }
// }

// if(success){
//     console.log("Card Blocked")
// }

// string:
// sequence of charecters

// "suvidha"
// "Krishna Pavan"
// We have some inbult methods for strings

// let name="Suvidha"

// let count=0

// for(let chr of name){
//     count+=1
// }
// console.log(count)

// let name="Suvidha"
// let c = name.length  // returning a value
// console.log("length of Suvidha string",c)

// let Firstname="Krishna Pavan"
// let d = Firstname.length  // returning a value
// console.log("length of krishna pavan string",d)

// let a=34

// Technical

// Javascript is both dynamically typed language and loosely typed

// dynamically typed : data type is not declared while intializing
// loosely : It happily converts between types when operators are used

// 123+"123"
// >>'123123' //This is called as Concatination

// 2) Split

// 3) Indexing

// 4) Slice

// split //To conver string to array with the given parameter

// let str="Mandarapu Siva Rama Krishna Pavan"
// let a=str.split(" ")

// // M.S.R.K.Pavan

// console.log(a)


// let str1="SuvidhaKudumula"
// let a1=str1.split(" ")

// console.log(a1)

// let str2="apple,banana,orange,grape,kiwi"
// let a2=str2.split(",")

// console.log(a2)

let str1="SuvidhaKudumula"
          0123456789
// console.log(str1[2])

// slice(start,end)
console.log(str1.slice(3,8)) // 8 is non inclusive
console.log(str1.slice(2,6))
console.log(str1.slice(3))





