// a - array that needs to be rotated
//d - num of rotations

// return a rotated arry
//ex. [1,2,3,4,5] at 2 rotations is [3,4,5,1,2]

//
function rotLeft(a, d) {
    // Write your code here
let numToPop 

for (let i=0; i < d ; i++) {
    let numToPop = a[0]
    a.shift()
    a.push(numToPop)

    }
    return a
}


console.log(rotLeft([1,2,3,4,5], 2))