//01 --find duplicate items 

// let arr= [2,3,4,5,4,2,3,7,2]

// function duplicate(arr){
//     let map = {}
//     let duplicate = []

//     for(let item of arr){
//         if(map[item]){
//             duplicate.push(item)
//         }else{
//             map[item] = "a"
//         }
//     }
//     return duplicate
// }

// console.log(duplicate(arr))

//Another Solution 

// function duplicateTwo(arr){
//     let seen = new Set()
//     let duplicate = new Set()

//     for(let item of arr){
//         if(seen.has(item)){
//             duplicate.add(item)
//         }else{
//             seen.add(item)
//         }
//     }

//     return Array.from(duplicate)
// }

// console.log(duplicateTwo(arr)) 


//-----------------------------------------------------------------------------------------------------------------

//2---Count the word 

// let str = "Hello World"-

// function countWord(str){
//     let newStr = str.replaceAll(" ","")
    
//     let map = {}

//     for(let item of newStr){
//         if(map[item]){
//             map[item]++
//         }else{
//             map[item] = 1
//         }
//     }
//     return map
// }

// console.log(countWord(str))


//-----------------------------------------------------------------------------------------------------------------

//3---Find Max And Min From Given Array 

// let arr = [2,3,4,5,6,2]

// function findMax(arr){
//     let max = arr[0]
//     let min = arr[0]
//     for(let item of arr){
//        if(max < item){
//         max = item
//        }
//        if(min > item){
//         min = item
//        }
//     }

//     return {max,min}
// }

// console.log(findMax(arr)) 

//-----------------------------------------------------------------------------------------------------------------

//4---How to find second largest value and remove first largest value in array

// let arr = [2,88,356,45,3,4,5,6,7,-8]

// function findMaxSec(arr){
//     let dupArr =arr
//     let firstMax = 0
//     let secondMax = 0 

//     for(let i=0 ; i<dupArr.length ;i++){
//         if(firstMax < dupArr[i]){
            
//             secondMax = firstMax
//             firstMax = dupArr[i]
            

//         }else if(firstMax > dupArr[i] && secondMax < dupArr[i]){
//             secondMax = dupArr[i]
//         }
//     }

//     let indexOF = dupArr.indexOf(secondMax)
//     let newArr = dupArr.filter((item) => item !== dupArr[indexOF])


//     return {firstMax,secondMax,newArr}

// }

// console.log(findMaxSec(arr))

//-----------------------------------------------------------------------------------------------------------------

//5-Find The Missing Element from given array 

// let arr = [1,2,4,5,7,8,10] 

// function findMissing(arr){
//     let misssing = []
//     let min = arr[0]
//     let max = arr[arr.length-1]

//     for(let i=min; i <= max; i++){
//         if(!arr.includes(i)){
//             misssing.push(i)
//         }
//     }
//     return misssing
// }

// console.log(findMissing(arr)) 

//-----------------------------------------------------------------------------------------------------------------

//6- Find Even Odd Numbers 

// let arr = [1,2,3,4,5,6,7,8,9,10]

// function findEvenOdd(arr){

//     let Even = []
//     let odd = []

//     for(let item of arr){
//         if(item % 2 ==0){
//             Even.push(item)
//         }else{
//             odd.push(item)
//         }

//     }
//     return {Even,odd}
// }

// console.log(findEvenOdd(arr)) 

//-----------------------------------------------------------------------------------------------------------------

//7-Find The sum of all elements in a given array 

// let arr =[1,2,3,4,5,6,7,8,9,10]

// function findSum(arr){
//     let sum = 0 

//     for(let item of arr){
//         sum = sum+item
//     }

//     return sum

// }
// console.log(findSum(arr))

// let res = arr.reduce((acc,item)=>{
//     return acc+item
// })

// console.log(res)

//----------------------------------------------------------------------------------------------------------------- 

//8-Find the Factorial (n!) of a given number in javascript 

// let n = 5 
// function findFact(n){
//     let fact = 1
//     for(let i = 1; i<=n; i++){
//     fact = fact*i
    
// }
// return fact
// }

// console.log(findFact(n)) 
//-----------------------------------------------------------------------------------------------------------------