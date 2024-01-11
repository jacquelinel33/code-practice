function diagonalDifference(arr) {
    // Write your code here
    

    let rightSum = 0
    let leftSum = 0

    let length = arr[0]

    
  
    for(let x=1; x <= length ; x++) {
        rightSum += arr[x][x-1]
       leftSum += arr[x][length - x]
    }
    return Math.abs(rightSum - leftSum)
}
let array = [
    [3],
    [11,2,4],
    [4,5,6],
    [10,8,-12],
]

console.log(diagonalDifference(array))

// an array of integers, that is a square array. 

// arr[1][0] [2][1] [3][2] [4][3]

// arr[1][3] [2][2] [3][1] [4][0]