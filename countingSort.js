// function countingSort(arr) {
//     // Write your code here
//     let newArray = Array(arr.length).fill(0);

//     for (let i in arr) {
//         newArray[arr[i]] += 1
//     }
//     return newArray
// }


function countingSort(arr) {
    // Initialize an empty frequency object
    let frequencyObject = {};

    // Count the occurrences of each value in the input array
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (frequencyObject[value]) {
            frequencyObject[value] += 1;
        } else {
            frequencyObject[value] = 1;
        }
    }

    // Create a result array based on the frequency object
    let result = [];
    for (let i = 0; i <= 99; i++) {  // Range is 0 to 99
        result.push(frequencyObject[i] || 0);
    }

    return result;
}

let arr = [1,2,3,2,1]

console.log(countingSort(arr));

//array to count occurances
//return array 