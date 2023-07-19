// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let newString = "";
  let count = 0;

  for (let x = 0; x < s.length; x++) {
    newString += s[x].toUpperCase();
    count++;
    for (let i = 0; i < count; i++) {
      if (i === 0) {
        continue;
      } else {
        newString += s[x].toLowerCase();
      }
    }
    if (x < s.length - 1) {
        newString += '-';
    }
  }

  return newString;
}

console.log(accum("abcd"))