
function removeSmallest(numbers) {
  let min = Math.min(...numbers)
  let returnArray = numbers.filter((e) => e != min)
  return returnArray
}

console.log(removeSmallest([6, 3, 8, 4, 5]))
console.log(removeSmallest([2, 2, 1, 2, 1]))