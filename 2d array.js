// 012;
// 2;
// 012;

let array_6x6 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36]
];

function hourglassSum(arr) {
  // Write your code here
  let maxSum = -Infinity;

  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
        let sum = arr[i][j] + arr[i][j + 1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]

        if (sum > maxSum) {
            maxSum = sum
        }
    
    }
  }

  return maxSum
}



console.log(hourglassSum(array_6x6));
