// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers) {
  return numbers.map((e) => e * e).reduce((a, b) => a + b, 0);
}

console.log(squareSum([0, 3, 4, 5]));
