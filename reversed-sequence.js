// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// create a loop that starts from n and goes down and pushes each integer into a new array
const reverseSeq = n => {
    let newArray=[]
    for (let i=n; i>0 ;i--) {
        newArray.push(i);
    }
    return newArray;
  };

  console.log(reverseSeq(5));