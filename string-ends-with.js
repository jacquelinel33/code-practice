// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
  let count = ending.length - str.length;
  let strCheck = str.slice(Math.abs(count));
  if (strCheck === ending) {
    return true;
  }
  return false;
}

console.log(solution("abc", "bc"));
