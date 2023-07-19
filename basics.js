// let randomVariable = 23
// console.log(randomVariable);

// alert(randomVariable += 10);


// let subtractFourNum = (num1, num2, num3, num4) => {
//     alert(num1-num2-num3-num4)
// }

// subtractFourNum(12324,345345,2342,123);

// let divideNum = (num1, num2) => {
//     return num1 % num2
// }

// console.log(divideNum(10,4))

// let jumanji = (num1, num2) => {
//    if(num1 + num2 > 50) {
//     alert('Jumangi')
//    }
// }

// jumanji(50,12);

// let zebra = (num1, num2, num3) => {
//     if(num1*num2*num3%3 === 0) {
//         alert('ZEBRA')
//     }
// }

// zebra(3,3,3)

// let loop = (word, num) => {
//     for (let i=0; i < num; i++) {
//         console.log(word)
//     }
// }

// loop('LOOP', 5);

// let closingTime = (arrayInput) => {
//     if (arrayInput[0] < arrayInput.length -1) {
//         alert("hi")
//     } else if (arrayInput[0] > arrayInput.length -1) {
//         alert("Bye")
//     } else if (arrayInput[0] == rrayInput.length -1) {
//         alert('We close in an hour')
//     }
// }

// closingTime([1,2,4,5,6])

let evenOnly = (arrayInput) => {
    let evenArray = []
    for (let x=0; x < arrayInput.length; x++) {
        if (arrayInput[x]%2 == 0) {
            evenArray.push(arrayInput[x])
        }
    }
    return evenArray;
}


console.log(evenOnly([1,4,6,7,3,4,5]));

let evenOnlyMap = (arrayInput) => {
   return arrayInput.filter(x => x % 2 === 0)
 
}
console.log(evenOnlyMap([1,4,6,7,3,4,5]));


function StreetFighter (fighterName, fighterSex, fighterStrength, fighterSpeed, fighterTalk) {
    this.name = fighterName
    this.sex = fighterSex
    this.strength = fighterStrength
    this.speed = fighterSpeed
    this.talk = function () {
        console.log(fighterTalk)
    }
}

let jacquelineFight = new StreetFighter('Jacqueline', 'F', '10', '4', 'RAWR')

console.log(jacquelineFight.name)
jacquelineFight.talk()