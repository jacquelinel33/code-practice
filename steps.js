// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// Example


// The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.

// Function Description

// Complete the countingValleys function in the editor below.

// countingValleys has the following parameter(s):

// int steps: the number of steps on the hike
// string path: a string describing the path
// Returns

// int: the number of valleys traversed

function countingValleys(steps, path) {
    let newArr = path.split("");
    let position = 0;
    let valleyCount = 0;


    for (let i = 0; i < steps ; i++) {
        if (path[i] == 'D') {
            position += -1
        } else if (path[i] == 'U') {
            position += 1  
            if (position === 0) {
                valleyCount ++
            }
        }
    }
    return valleyCount
}

console.log(countingValleys(8, "DDUUDDUU")) 
console.log(countingValleys(2, "DD")) 
console.log(countingValleys(11, "DUUDUDDUUUD")) 
console.log(countingValleys(12, "UUDUUDUDDUUUD"))   