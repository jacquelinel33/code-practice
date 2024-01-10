//parameter array of 0 and 1 ints
//return mim num of jumps require. Int

function jumpingOnClouds(c) {
    // Write your code here
    let jumpCount = 0;
   for ( let i = 0 ; i < c.length -1; ) {

    if (c[i + 2] === 0) {
       jumpCount ++
       i += 2
     console.log(i,"plus 2")
    } else {
        jumpCount ++
        i += 1
        console.log(i,"plus 1")
    }
   }
   return jumpCount
}

console.log(jumpingOnClouds([0,1,0,0,1,0,0])) //4 jumps
// console.log(jumpingOnClouds([0,1,0,0,0,1,0])) // 3 jumps