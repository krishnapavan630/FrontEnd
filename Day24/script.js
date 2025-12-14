// Synchronus : The code runs in a particular sequence

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)

// Asynchronus :  The code doesnot runs in a particular sequence

// callback hell
// promises
// asyn-await

// API calls Fetch


// function greet(){
//     console.log("Good Morning")
// }

// greet()

// setTimeout(greet,5000)

// setTimeOut(function,delay time)

// 

// setTimeout(()=>{console.log("Good Morning")},4000)

// console.log(1)
// console.log(2)
// setTimeout(()=>{console.log(3)},4000)
// console.log(4)


// JS works as asynchronusly

// Callback function: If a function is passed as a parameter or argument, then the function is called as callbackfunction

// function sum(a,b){
//     console.log(a+b)
// }

// function sub(a,b){
//     console.log(a-b)
// }


// // sub(3,2)


// function hello(a,b,func){
//     func(a,b)
// }

// hello(7,3,sub)   //4
// hello(7,3,sum)   //10

// 4


// sub(7,3)

// function cooking(){
//     // Biriyani Preparation
//     // console.log("Briyani is being prepared")
// }

// function serving(){
//     //When biriyani is prepared the server will get the biriyani to my plate
// }

// restarunt(cooking,serving)   Oka function lopala inkoka function parameter ga pass chesinatlu aithey aa functions ni call back function antam

// 1   -- > after 2 sec
// 2   -- > after 2 sec
// 3   -- > after 2 sec

// setTimeout(()=>{
//     console.log(1)
// },2000)

// setTimeout(()=>{
//     console.log(2)
// },2000)

// setTimeout(()=>{
//     console.log(3)
// },2000)

//new Promise((resolve,reject)=>{...})

// resolve, reject --> Handler

// let val = new Promise((resolve,reject)=>{
//     console.log("My name is suvidha")
//     resolve("success")
// })

// let val = new Promise((resolve,reject)=>{
//     console.log("My name is suvidha")
//     reject("Failed due to network issue")
// })

// then -- We will use then if the promise is successful
// catch -- We will use catch if the promise is successful

// function getPromise(){
//     return new Promise((resolve,reject)=>{
//         console.log("Hello there")
//         reject("Network error")
//     })
// }

// let val=getPromise();
// val.catch((err)=>{
//     console.log("failed due to",err)
// })

//async await

// syntax:

//             async function myFunc(){ ... }

// await pauses the function execution of its surrounding functions

// function whether_api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Sunny")
//             resolve("success")
//         },4000)
//     })
// }

// async function getData(){
//     await whether_api()
// }


// API (Application Programing Interface)


// const url="https://fakestoreapi.com/products"


// fetch(url,options)  //By default value of GET

// let val=fetch(url)
// console.log(val)

// let getData=async ()=>{
//     let val=await fetch(url)
//     console.log(val)
// }

// const url="https://fakestoreapi.com/products"

// const ele=document.querySelector("#btn1")
// const ele2=document.querySelector("img")
// const ele3=document.querySelector("p")
// const ele4=document.querySelector("h4")

// async function getData(){
//     let val= await fetch(url)   // JSON response
//     let data= await val.json()         // Json Object format
//     ele2.src=data[15].image
//     ele3.innerText=data[15].description
//     ele4.innerText=data[15].price
// }

// ele.addEventListener('click',getData())
