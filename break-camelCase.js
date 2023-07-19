// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//take in a string, loop through the string to check for capital letters. If there isn't a captial letter, add the letter as is into a new string. If it's a capital letter, add the letter into the string with a space before it.

function breakCamelCase (inputString) {
    let returnString = ""
    for (let x=0; x<inputString.length; x++) {
        if (inputString[x] === inputString[x].toUpperCase()) {
            returnString += " " 
        }
        returnString += inputString[x]
        }
    return returnString
}

console.log(breakCamelCase('camelCasingTest'))
