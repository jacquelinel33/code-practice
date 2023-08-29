
function doubleChar(str) {
  let array = str.split('')
  for (let i=0; i<str.length; i++) {
    if (array[i].toUpperCase() === array[i]) {
      array.splice(i, 0, array[i])
      i++
    }
  }

 return array.join("")
}

console.log(doubleChar("Adidas"))
console.log(doubleChar("Hello World"))
console.log(doubleChar("LL Bean"))