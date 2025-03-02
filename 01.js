//3---Area Of Reactangle
// const cala = (length,breadth) => {
//     console.log(length*breadth)
// }
// const ans  = cala(2,2.4) 

//4 ------Even or Odd
// const cal = (a) => {
//     if(a%2 === 0){
//         return "This is even number"
//     }else if(a%2 !== 0){
//         return "This is odd number"
//     }else{
//         return "Please provide valid number"
//     }
// }

// const ans  = cal(undefined)
// console.log(typeof ans)

//5----- smallest Number

// function f(a,b,c)  {
//    if(a<b && a<c){
//     return a
//    }else if(b<a && b<c){
//     return b
//    }else if(c<a && c<b){
//     return c
//    }
//    return a
// }

// function f(a,b,c){
//     let smallestNumeber = a
//     if(b<smallestNumeber){
//         smallestNumeber = b
//     }
//     if(c<smallestNumeber){
//         smallestNumeber = c
//     }
//     return smallestNumeber
// }

// console.log(f(3,3,3)) 

//5-----reverse string
// function revserse(str){
//     let ans  = ''
//     for(let i=str.length-1; i >= 0; i--){
//         ans = ans+str[i]
//     }
//     console.log(ans)
// }
// revserse('hari hari')


//6------Factorial of number
// function fact(num){
//     let ans = 1;
//     for(let i = num ; i >=1 ; i--){
//         ans = ans * i
//     }
//     return ans
// }
// console.log(fact(0))

//7-----Leap Year
// function leapYear(year){
//     console.log(typeof(year))
//     if(typeof year !== 'number'){
//         throw new Error("Please pRovide valid year")
//     }
//     if(year % 4 === 0){
//         return "This is Leap year"
//     }else{
//         return "This is not Leap year"
//     }
// }
// console.log(leapYear(1974))

//8------Print the sum of given number 

// function sum(num){

//     let inputAsString = num.toString()
//     let splitString = inputAsString.split('')
//     let sum = 0;
//     for(let i=0 ; i<splitString.length; i++){
//         sum = sum + Number(splitString[i])
//     }
//     return sum
// }

// function sum(num){
//     let temp  =num
//     let ans =0 
//     while(temp > 0){
//         let lastDigit = temp%10
//         temp = Math.floor(temp/10) 
//         ans= ans+lastDigit

//     }
//     return ans
// }

// console.log(1%10)

//7----Multiplication Table

// function mul(a,b){
//     for(let i = 1;i <= b; i++){
//         console.log(a*i)
//     }
// }

// mul(2,20)

//8----find Maimum Array from number 
// function max(arr){
//     let ans = arr[0]
//     arr.forEach((num)=>{
//         if(ans < num){
//             ans = num
//         }
//     })
//     return {ans,seco}
// }
// console.log(max([0.2,0.3,0.5]))

//9----Palindrome

// function isPalindrome(str){
//     for(let i=0 ; i < str.length ; i++){
//         if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
//             return false
//         }
         
//     } 
//   return true
// }
// console.log(isPalindrome("123221"))

//10---Power of given number
// function pow(number,pow){
//     let ans = 1
//     for(let i = 1 ; i <= pow ; i++){
//         ans = ans*number
//     } 
//     return ans
// }
// console.log(pow(2,5))

//11---Count vowels and constants 

// function count(str){

//     let vowelsCount = 0
    
//     let totalLength = str.length
//     for(let i=0 ; i<str.length; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//             vowelsCount++
//         }
//     }
//     let constantsCount = totalLength-vowelsCount

//     return {
//         vowelsCount,
//         constantsCount
//     }

// }

// function count(inputString){
//     let str = inputString.toLowerCase()
//     const vowels = "aeiou"
//     const consonants  = "bcdfghjklmnpqrsvwxyz"

//     let vowelsCount = 0
//     let consonantsCount = 0 

//     for(let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             vowelsCount++
//         }
//         else if(consonants.includes(str[i])){
//             consonantsCount++
//         }
//     }

//     return {
//         vowelsCount,
//         consonantsCount
//     }

// }

// console.log(count("hello world  hJg"))

//12-------find all factors of given number 

// function fact(number){
//     let num = Math.floor(number)
//     if(typeof(num) !== 'number' || num <= 0){
//         throw new Error("Please provide valid positive number")
//     }
//     let arr =[]
//     for(let i=1 ; i <= num ; i++){
//         if(num%i ==0){
//             arr.push(i)
//         }
//     }
// return arr
// }

// console.log(fact(-14.2))

//13---Calculate AVG 

// function avg(num){
//     let ans = 0
//     for(let i = 0 ;i<num.length ;i++){
//         ans = ans+num[i]
//     }

//     return ans/num.length
// }

// console.log(avg([1,2,4])) 

// function loanIntrestCal(amount,rate,time){
//     if(time < 0 ){
//         throw new Error("Provide valid year")
//     }

//     let ans  = (amount*rate*time)/100 
//     return ans.toFixed(2)
// }

// console.log(loanIntrestCal(20000,8.755,5))

//15---Check Prime Number 

// function isPrimeNum(num){
//     for(let i=2 ; i<num ; i++){
//         if(num%i==0){
//           return false
//         }else{
//             return true
//         }
//     }
// }
// console.log(isPrimeNum(5))

//16------Counting the words in sentence

// function count(str){
//     let str1 = str.split(" ")
//     console.log(str1)
//     let ans = str1.filter((ele)=>{
//         return ele != ''
//     })
//     return ans.length
// }

// console.log(count("This is        Red"))

//17--swap number 

// function swap(num1,num2){
    // let c = num1 
    // let a = num2
    // let b = c

   
    
    // return {a,b}
// }

// let a= 2
// let b = 3 

// a = a+b 
// b = a-b 
// a = a-b
// console.log(a,b)

//18----Armstrong number checker

// function armStrong(num){
//  let numArr =[]
//  let number = num 

//  while(number > 0){
//     let lastDigit = number%10
//     number = Math.floor(number/10)
//     numArr.push(lastDigit)
//  }
 
//  let ans = 0
//  let power = numArr.length 
//  numArr.forEach((digit)=>{
//     ans = ans+Math.pow(digit,power)
//  })

//  if(num === ans){
//     return true
//  }else{
//     return false
//  }


// }

// console.log(armStrong(370))

//19--FizzBuzz 

// function fizz(n){
//     let ans =[]
//     for(let i=1 ;i<=n;i++){
//         if(i%3 ==0 && i%5 ==0){
//             ans.push("fizzBuzz")
//         }else if(i%3 ==0){
//             ans.push("fizz")
//         }else if(i%5 ==0){
//             ans.push("Buzz")
//         }else{
//             ans.push(i)
//         }
        
//     }
// return ans
// }

// console.log(fizz(36))

//20----Character occurence 

// function char(str){

//     let newStr = str.replace(" ","")
//     let ans = {}

//     for(let i=0; i<newStr.length; i++){
//         let char = newStr[i].toLowerCase()
//         if(!ans[char]){
//             ans[char]=1
//         }else{
//             ans[char] = ans[char]+1
//         }
//     }
//     return ans
// }

// console.log(char("hari hariI")) 

//***********************************************************************************//

//1- Find Duplicate element in array

// function findDup(arr){

//     let ans = []
//     let ans2=[]

//     for(let i=0; i<arr.length; i++){
//         if(ans.includes(arr[i])){
//             ans2.push(arr[i])
//         }else{
//             ans.push(arr[i])
//         }
//     }

//     return {ans2,ans}

// }

// console.log(findDup([2,2,3,4,5,5,6])) 


// let arr = [2,5,4,8,4,8,7,8]

// function dup(arr){
//     let duplArr = []
//     let res = []

//     for(let i=0; i<arr.length; i++){
//         if(duplArr.includes(arr[i])){
//             res.push(arr[i])
//         }else{
//             duplArr.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(dup(arr))


//2-- find Letter count 

// function countStr(str){
//     let newStr = str.replaceAll(" ","")  
//     let countObj = {}
//     for(let i=0; i<newStr.length; i++){
//         let char = newStr[i]
//         if(!countObj[char] && char !== " "){
//             countObj[char]=1
//         }else{
//             countObj[char]++
//         }
//     }
//     return countObj
// }

// console.log(countStr("hello buddy"))

