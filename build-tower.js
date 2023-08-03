// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  let towerArray = [];
  let count = 0;
  for (let x = 1; count < nFloors; x += 2) {
    let string = "*".repeat(x);
    let space = " ".repeat(nFloors - x / 2);
    let combined = space + string + space;
    towerArray.push(combined);
    count++;
  }
  return towerArray;
}

console.log(towerBuilder(10));
