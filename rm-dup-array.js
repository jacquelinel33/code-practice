var removeDuplicates = function (nums) {
  let returnArray = [];
  for (let x of nums) {
    if (!returnArray.includes(x)) {
      returnArray.push(x);
    }
  }

  return returnArray.length;
};


console.log(removeDuplicates([1, 1, 2,3,4,4,4]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1,1,2]))


