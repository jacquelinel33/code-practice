// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let reverseStr = "";
  let array = str.split(' ');
  for (let index in array) {
      for (let i = array[index].length - 1; i >= 0; i--) {
        reverseStr += array[index][i];
      }
      reverseStr += " ";
  }
  return reverseStr.trim();
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
