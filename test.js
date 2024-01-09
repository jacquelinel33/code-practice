function sockMerchant(n, ar) {
    // Write your code here
    let matches = {};
    let matchCount = 0;
    for (let x = 0; x < n ; x++) {
        if (matches[ar[x]]) {
            matches[ar[x]] += 1

        } else {
            matches[ar[x]] = 1
        }
    }

    for (let key in matches) {
        let count = Math.floor(matches[key] / 2)
        matchCount += count
    }

    return matchCount
}

console.log(sockMerchant(5, [1,2,3,1,2]))