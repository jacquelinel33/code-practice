// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  let newString = "";
  if (num > 0) {
    for (let x = 1; x <= num; x++) {
      newString += `${x} sheep...`;
    }
  }
  return newString;
};

console.log(countSheep(10));
