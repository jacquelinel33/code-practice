// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

//turn each digit into an array. If length is > 1; then return 0. Otherwise, 
function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num.toString().split('').reduce((t, c) => c * t);
  }
  return i;
}



console.log(persistence(2139))
console.log(persistence(4))