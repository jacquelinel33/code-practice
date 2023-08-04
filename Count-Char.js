function count(string) {
    let countObj = {}
    // let stringLower = string.toLowerCase()
    for ( let i = 0; i < string.length; i++) {
        let char = string[i]
        if (countObj.hasOwnProperty(char)) {
            countObj[char] += 1
            console.log("increments!")
        } else {
        countObj[char] = 1
        }
    }
    return countObj
  }

  console.log(count('ABbbas'))