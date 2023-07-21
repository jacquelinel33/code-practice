// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str
    .split("")
    .map((e) => e.toUpperCase())
    .join("");
}

console.log(makeUpperCase("hello"));
