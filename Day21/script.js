// console.log("Suvidha")
// str.toUpperCase()


// let str="ajay"

// let val=str.toUpperCase()

// console.log(val)

// let str="Suvidha"

// console.log(str.length)

// Syntax

// function functionName(parameters){  //function declaration
//     // do some work
// }

// functionName()  // calling the function 

// function greet(){
//     console.log("Good Morning")
// }

// greet()

// function greet(name){
//     console.log("Good Morning",name)
// }

// greet("Suvidha")
// greet("Krishna")
// greet("Ajay")

// let arr="suvidha"

// console.log(arr.length)

// function len(n){
//     let count=0
//     for(let val of n){
//         count++
//     }
//     console.log(count)
// }

// len("Krishna")

// 1) Create a function that returns greeting to the user 
// (example if the user name is ajay it should retunr as Good Morning Ajay
//                              suvidha should return as Good Morning Suvidha
// )

// let user="Ajay"
// console.log("Good Morniing",user)
// let u=
// user1="Ajay"
// user2="Pavan"
// user3="Suvidha"
// console.log("Good Morniing",user1)
// console.log("Good Morniing",user2)
// console.log("Good Morniing",user3)

// function i(u){
//     console.log("Good Morning",u)
// }

// i("Ajay")
// i("Suvidha")
// i("Krishna")

// Type of function

// 1)Function with parameters with return values
// 2)Function with parameters without return values
// 3)Function without parameters without return values
// 4)Function without parameters with return values

// let val1=4
// let val2=5
// console.log(val1+val2)


// function addition(n1,n2){
//     console.log(n1+n2)
// }

// addition(4,5)

// function sum(n1,n2){
//     return (n1+n2)
// }

// let val=sum(7,8)
// console.log(val)

// function addition(){
//     let a=4
//     let b=5
//     console.log(a+b)
// }

// addition()

// function addition(){
//     let a=4
//     let b=5
//     return (a+b)
// }

// let val=addition()

// console.log(val)

// let c=0 //Global Variable

// function add(a,b){
//     let k=a+b  
//     console.log(k)    //Local Variable
// }

// add(6,10)
// console.log(c)

// function add(a,b){
//     return a+b
// }

// Arrow Function


// let arrowSum=(a,b)=>{
//             console.log(a+b)
//         }

// arrowSum(7,12)

let arrowSum=(a,b)=>{
            return (a+b)
        }
let val= arrowSum(7,12)
console.log(val)