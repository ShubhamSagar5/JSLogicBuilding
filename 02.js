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


//---------------------------------------------

//2---Count the word 

let str = "Hello World"

function countWord(str){
    let newStr = str.replaceAll(" ","")
    
    let map = {}

    for(let item of newStr){
        if(map[item]){
            map[item]++
        }else{
            map[item] = 1
        }
    }
    return map
}

console.log(countWord(str))