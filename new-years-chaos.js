function minimumBribes(q) {
    let count = 0
    for (let i=0; i < q.length ; i++) {
        let ogQnum = i + 1
        if (q[i] !== ogQnum) {
            let diff = Math.abs(q[i] - ogQnum)
            if (diff > 2) {
                console.log("Too chaotic")
            } else {
                count += diff
            }
        }
    }

  console.log(count)
}


console.log(minimumBribes([2,5,1,2,3]))