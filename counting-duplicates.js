// DESCRIPTION:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//parameter - input of string with alpha characters lower and upper and numeric digits
//return - the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string

function duplicateCount(text) {
    // let count = 0;
    // let textArray = text.toLowerCase().split('');
    // textArray.forEach(e => {
    //   const filteredArray = textArray.filter(item => item !== e);
    //   if (textArray.length !== filteredArray.length) {
    //     count++;
    //   }
    //   textArray = filteredArray; // Update the array for the next iteration
    // });
    // return count;
  }

console.log(duplicateCount('Indivisibilities'))