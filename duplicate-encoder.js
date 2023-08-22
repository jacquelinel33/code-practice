// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  let checkLetter = {};
  let returnString = "";

  for (let value of word.toLowerCase()) {
    checkLetter[value] ? (checkLetter[value] += 1) : (checkLetter[value] = 1);
  }

  for (let value of word.toLowerCase()) {
    checkLetter[value] > 1 ? (returnString += ")") : (returnString += "(");
  }

  return returnString;
}
console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
