var reduce = function (nums, fn, init) {
let accum = init
  for (let x = 0; x < nums.length; x++) {
    accum = fn(accum, nums[x])
  }
  return accum
};

let fn = function sum(accum, curr) { return accum + curr * curr; }

console.log(reduce([1, 2, 3, 4], fn, 100));

