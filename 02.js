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

// let str = "Hello World"

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

//9-Find the Prime number from array 

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] 

// function isPrime(num){
//     let ans = []
//     for(let i = 0; i<arr.length; i++){

//         let num = arr[i]
        
//         if(num < 2){
//             continue
//         }

//         let prime= true
//         for(let j=2; j<num; j++){
//             if(num%j ===0){
//                 prime =  false
//                 break
//             }
//         }
//         if(prime){
//             ans.push(num)
//         }

//     }
//     return ans

// }

// console.log(isPrime(arr)) 

//----------------------------------------------------------------------------------------------------------------- 
//10-Find the count of vowels 

// let str = "hari"

// function vowels(str){
//     let count = 0
//     let newStr = str.toLowerCase()
//     let vowelsArr = ['a','e','i','o','u'] 
//     let vowelsAns=[]

//     for(let word of newStr){
//         if(vowelsArr.includes(word)){
//             vowelsAns.push(word)
//             count++
//         }
//     }

//     return {
//         count,vowelsAns
//     }

// }

// console.log(vowels(str)) 
//----------------------------------------------------------------------------------------------------------------- 

//11-how to reverse a string in javascript 

// let str = "hari"

// function reverseStr(str){
//     let newStr = ""

//     for(let i=str.length-1; i >=0; i--){
//         newStr = newStr+str[i]
//     }

//     return newStr
// }

// console.log(reverseStr(str)) 

//----------------------------------------------------------------------------------------------------------------- 

// 12-How to find palindrome in javascript 

// let str = "mahghdam" 

// function palindrome(str){

//     let first =""
//     let last=""
//     let ans = ""

//     for(let i=0; i< Math.abs(str.length/2); i++){
//         first = str[i]
//         last = str[(str.length-1)-i] 

//         if(first == last){
//             ans = "This is a palindrome string"
            
//         }else{
//             ans = "This is not palindrome string"
            
//         }
//     }

//     return ans

// }

// console.log(palindrome(str)) 

//----------------------------------------------------------------------------------------------------------------- 

//13-Swap Two variables  without using third variable 

// let a = 30 
// let b = 20  

// console.log(a,b)

// a = a+b 
// b = a-b 
// a = a-b 

// console.log(a,b) 

//----------------------------------------------------------------------------------------------------------------- 
 
//14-How to merged two array and sort them in js

// let arr1 = [2,5,6,3,4]
// let arr2 = [9,10,7,8]

// //  let arr3 = arr1.concat(arr2)
// let arr3 = [...arr1,...arr2]
// let ans = arr3.sort((a,b)=>{
//     return a-b
// })
// console.log( ans) 

//----------------------------------------------------------------------------------------------------------------- 

//15- find factors of given number 

// function factor(num){

//     let ans = [] 

//     for(let i=1; i<=num; i++){
//         if(num%i == 0){
//             ans.push(i)
//         }
//     }
//     return ans

// }
// console.log(factor(30))

//----------------------------------------------------------------------------------------------------------------- 

//16-compare two arrays is equal or not  

// let arr1 = [2,5,6,3,4,6]
// let arr2 = [2,5,6,3,4,5]

// function compare(arr1,arr2){

//     let flag = true

    // for(let i = 0; i<arr1.length; i++){
        
    //     if(arr1.length !== arr2.length){
    //         flag = false;
    //     }

    //     if(arr1[i] !== arr2[i]){
    //         flag = false;
    //     }
    // }

    // if(flag){
    //     return "This is equal"
    // }else{
    //     return "This is not equal"
    // }

    // let ans = arr1.every((val,ind)=>{
    //     return val == arr2[ind]
    // })

    // console.log(ans)
// }

// console.log(compare(arr1,arr2)) 

//-----------------------------------------------------------------------------------------------------------------

//17 -Find the intersection between two array 

// let arr1 = [2,5,11,3,4,6]
// let arr2 = [13,5,6,3,4,5]

// function intersection(arr1,arr2){

//     let ans = [] 

//     // for(let i=0; i<arr1.length; i++){
//     //     if(arr2.includes(arr1[i])){
//     //         ans.push(arr1[i])
//     //     }
//     // } 

//     let ans2 = arr1.filter((val,ind)=>{
//         return arr2.includes(val)
//     })

// return ans2
// }

// console.log(intersection(arr1,arr2)) 

//-----------------------------------------------------------------------------------------------------------------

//18 -Find the union between two array 

// let arr1 = [2,5,11,3,4,6]
// let arr2 = [13,5,6,3,4,5,78]

// function union(arr1,arr2){

//     let union = [...arr1]
    
//     for(let i=0; i<arr2.length; i++){

//         let duplicate  = false 

//         for(let j=0; j<union.length; j++){
//             if(arr2[i] == union[j]){
//                 duplicate = true
//                 break
//             }
//         }

//         if(!duplicate){
//             union.push(arr2[i])
//         }

//     }

//     return union

    
    
    
// }

// console.log(union(arr1,arr2)) 

//----------------------------------------------------------------------------------------------------------------- 

//19 -Find out duplicate item from array 

// let arr = [2,2,5,4,6,7,9] 

// function duplicate(arr){

//     let ans = [] 
//     let duplicate = []

//     for(let val of arr){
//         if(!ans.includes(val)){
//             ans.push(val)
//         }else{
//             duplicate.push(val)
//         }
//     }

// return {ans,duplicate}

// }

// console.log(duplicate(arr)); 

//-------------------------------


// let arr1 = [13,7,6,8,4,4,5,78,6,6] 

// function union(arr1){
  
//     let seen  = []
//     let duplicate = []

//     for(let val of arr1){
//         if(!seen.includes(val)){
//             seen.push(val)
//         }else {
//             if(!duplicate.includes(val)) duplicate.push(val)
//         }
//     }

    
   

// return {duplicate,seen}



// }



// console.log(union(arr1))


//----------------------------------------------------------------------------------------------------------------- 
//20- Convert first letter of string in to uppercase 

// let string = "hello buddy" 

// function str(str){

//     let newStr = ""
//     let stringArray = str.split(" ")
    
//     let res = stringArray.map((val)=>{
//         return val.charAt(0).toUpperCase() + val.slice(1)
//     })
        
//     newStr = res.join(" ")

//     return newStr

// } 

// console.log(str(string)) 

//-----------------------------------------------------------------------------------------------------------------  

//21-- Fibonnaci Series

// function fibo(num){
//     let a = 0 
//     let b = 1
//     let ans=[]
//     for(let i=0; i<=num; i++){
        
//         let res = a+b 
//         a=b
//         b=res 
//         ans.push(res)

//     }

//     return ans

// }

// console.log(fibo(10)) 

//----------------------------------------------------------------------------------------------------------------- 

//22 -Star Pattern code (Right Triangle ,Pyramid) 

// for(let i=1;i<=6;i++){
//     let row = ""

//     for(let j=1; j<=i; j++){
//         row = row+"*"
//     }

//     console.log(row)
// } 


// for(let i=1; i<=6; i++){
//     let row  = "" 

//     //space 
//     for(let j=1; j<=6-i; j++){
//         row=row+" "
//     }

//     for(let k=1;k<=2*i-1;k++){
//         row = row+"*"
//     }

//     console.log(row)
// } 
 
//----------------------------------------------------------------------------------------------------------------- 

//23 --Find the number of occurrenec in the string 

// function count(str){
//     let newStr = str.toLowerCase().replaceAll(" ","")
//     let map={} 

//     for(let val of newStr){
//         if(map[val]){
//             map[val]++
//         }else{
//             map[val] = 1
//         }
//     }

//     return map


// }

// console.log(count("Hari hAri")) 

//----------------------------------------------------------------------------------------------------------------- 

// 23--Print Table of user defined number 

// function Table(num){

//     for(let i=1;i<=10;i++){
//         console.log(`${num} * ${i} =  ${i*num}`)
//     }
// }

// Table(2) 

//----------------------------------------------------------------------------------------------------------------- 

//24 -Armstrong Number 

function Armstrong(num){

    let number = [] 
    let newNumber = num
    

    while(newNumber > 0){
        let lastDigit = newNumber%10 
        newNumber = Math.floor(newNumber/10) 
        number.push(lastDigit)
    }
    
    let ans = 0 
    let powLength = number.length
    number.forEach((item)=>{
        ans = ans+(item**powLength)
        
    })
    
    if(ans == num){
        return true
    }else{
        return false
    }
    

}

console.log(Armstrong(371))