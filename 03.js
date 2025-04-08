//1-Clousres 

// function countnumber(){
//     let count = 0 

//     let increment = () => {
//         count++
//         return count
//     }

//     let decrement = () => {
//         count--
//         return count 
//     }

//     return {
//         increment,
//         decrement
//     }
// }

// let closure = countnumber()
// console.log(closure.increment())


//----------------------------------------------
//2- call,apply,bind 


// let per1 = {
//     firstName:"hari",
//     lastName:"bol",

//     // fullName:function(){
//     //     console.log(`this is fullName ${this.firstName} ${this.lastName}`)
//     // }
// }

// let per2 = {
//     firstName:"sham",
//     lastName:"sundar",

//     fullName:function(){
//         console.log(`this is fullName ${this.firstName} ${this.lastName}`)
//     }
// }
//function borowing
// let printFullName = function(home,state){
//     console.log(`this is fullName ${this.firstName} ${this.lastName} and home town is ${home} and state ${state}`)
// }

// printFullName.call(per1,"NAshik","maharatstra")
// printFullName.call(per2,"mumbai","maharatstra") 

// printFullName.apply(per1,["NAshik2","maharatstra2"]) 

// let printFullNameCopy = printFullName.bind(per1,"nashik","malegoan")
// printFullNameCopy() 

//---------------------------------------------- 

//3 - Event Delegation 

// let parent = document.getElementById("parent") 

// function handler(e){
//     let target = e.target
//     console.log("Clicked",target.textContent,target.value)
// }

// parent.addEventListener("click",handler)
 
//---------------------------------------------- 
// 4  - WeakMap and WeakSet 

// let weakMap = new WeakMap() 

// let obj = {
//     name:"hari"
// }

// weakMap.set(obj,"employee")

// console.log(weakMap.get(obj.name)) 

//----------------------------------------------


// let obj = Object.create({name:"hari"})
// console.log(obj.name)
// obj.name = "hari2"
// delete obj.name 
// console.log(obj.name) 

// let obj2 = {
//     name:"hari2"
// } 
// console.log("br")
// console.log(obj2.name)
// delete obj2.name 
// console.log(obj2.name) 

//----------------------------------------------

let count = 0
function greet(num){
   count = count+num
   return count
}

console.log(greet(5))
console.log(greet(5))
