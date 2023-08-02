// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  //code here
  let arrayN = n.toString().split("");
  let reversedArray = [];
  console.log(arrayN);
  for (let x = arrayN.length - 1; x >= 0; x--) {
    reversedArray.push(parseInt(arrayN[x]));
  }
  return reversedArray;
}

console.log(digitize(12352353));
