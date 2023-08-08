//square every digit in an input and concatenate them as a string. 

function squareDigits(num){
 let combinedString = num.toString().split('').map(e => Math.pow(e,2)).join('')
 
 return parseInt(combinedString)
}
console.log(squareDigits(3212))