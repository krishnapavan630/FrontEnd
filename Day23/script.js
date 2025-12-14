// // Call Backfunction

// function sum(a,b){   // a,b Parameters
//     c=a+b
//     console.log(c)
// }

// sum(8,9)   //8,9 Arguments  --> if you observe we have passed integer type of arguments

// sum(multi)

// Dom --> Document Object Model

// Window is an global object which is created bvy the browser by defaultly

// console.log(document)

// let heading = document.getElementById("heading")

// console.log(heading)

// let headingclass= document.getElementsByTagName("p")

// Query selector  -- Id,class,tag

// let val= document.querySelector("button")

// console.log(val)

// DOM MAnipulation

// innerText

// let ele= document.querySelector("p")
// ele.innerText="My name is Suvidha"

//innerHTML

// ele.innerHTML = "<i> click me </i>"
//
// ele.innerHTML = "<b> click me </b>"
//

// Textcontent  

// let ele=document.querySelector("p")
// undefined
// ele
// <p>​This ia a paragraph ​</p>​
// ele.innerText
// ''
// ele.textContent
// 'This ia a paragraph '

// Event --> we call a chnage occured in an object is known as event

// Ex:

// Mouse click (Single click, Double click)
// key board event( key PermissionStatus, up, down)
// Form event(submit)

// We can invoke event either using inline events or externally

// external events handles

// Syntax

//                 node.event=()=>{
//                     //the statement
//                 }

// let ele = document.querySelector("#btn1")

// let count=0

// ele.onclick=()=>{
//     console.log("you have clicked the button ")
//     count++
//     console.log('the no.of time you have clicked the button is',count)
// }

// ele.onclick=()=>{
//     alert("Hello My name is suvidha")
// }

// let ele2 = document.querySelector("div")

// ele2.onmouseover=(e)=>{
//     console.log("you are inside the box")
//     console.log(e)
// }

// event object

// Events listner

// syntax:
            // Node.eventlistner(event,callbackfunction)


// let ele = document.querySelector("#btn1")

// ele.addEventListener('click',()=>{
//     console.log("Hello there")
// })
// ele.addEventListener('click',()=>{
//     alert("My name is suvidha")
// })


let ele =document.querySelector('#btn1')

let currMode="light"

ele.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="Dark"
        document.body.style.backgroundColor="black"
    }
})

let ele2 =document.querySelector('#btn2')

ele2.addEventListener("click",()=>{
    if(currMode==="Dark"){
        currMode="light"
        document.body.style.backgroundColor="white"
    }
})