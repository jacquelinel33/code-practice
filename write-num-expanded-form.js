// DESCRIPTION:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

//loop through the string.

function expandedForm(num) {
  let numStr = num.toString();
  let returnStr = [];
  for (let x = 0; x < numStr.length; x++) {
    if (numStr[x] !== "0") {
      returnStr.push(numStr[x] + "0".repeat(numStr.length - x - 1));
    }
  }
  return returnStr.join(" + ");
}

console.log(expandedForm(70304));
