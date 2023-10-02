function filter(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) || fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
}

let fn = function greaterThan10(n) { return n > 10; }

console.log(filter([0,10,20,30],fn))
