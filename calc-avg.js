// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//paramter - a list of numbers as an array?
// return - avg of numbers which is calculated by adding up the numbers together divided by the count of nums
// example = [1,2,5,6,7] --> 21/5 --> 4.6

function findAverage(array) {
    if (array.length !== 0) {
        let avg = array.reduce((a,b) => a + b, 0)/array.length;
        return avg;
    }
    return 0
  }

  console.log(findAverage([1,2,5,6,7]))