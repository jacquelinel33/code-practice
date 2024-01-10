//s, string to repeat
//n, number of characters

// function repeatedString(s, n) {
//     // Write your code here
//     let newArray = []
//     let sToArray = s.split('')
//     let count = 0
//     while (newArray.length < n) {
//         for (let i of sToArray) {
//             if (newArray.length < n ) {
//                 newArray.push(i);
//             }
//         }
//     }
   
//     for (let i of newArray) {
//         if (i === 'a') {
//             count ++
//         }
//     }
//     return count
// }

function repeatedString(s,n) {
   let repeatNum = Math.floor(n / s.length) 
   let leftOverNum = n % s.length
   let repeatCount = 0
   let leftOverCount = 0

   for (let i of s) {
        if (i == 'a') {
            repeatCount += 1
        }
   }


   for (let i = 0; i < leftOverNum ; i++) {
        if(s[i] === 'a') {
            leftOverCount++
        }
    }
    
    return repeatCount * repeatNum + leftOverCount

}


console.log(repeatedString('aba', 10)) //7
console.log(repeatedString('aabba', 8)) //5
console.log(repeatedString('acbac', 10)) //4
console.log(repeatedString('cbc', 10)) //0
console.log(repeatedString('kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm'),736778906400 ) //51574523448


// create an empty array. push the string into the array until the string length is n. Loop through the new array and if the letter is a, add one to a counter value. 