// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

//parameter - lower cased string with words seperated by space
//return count of word with the highest score based on its position in the alphabet
//

function high(x) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphaScore = {};
  let count = 1;
  for (let l of alphabet) {
    alphaScore[l] = count;
    count++;
  }

  let scoreCount = {};
  let highestWord = "";
  let highestScore = 0;

  x.split(" ").forEach((word) => {
    scoreCount[word] = 0;
    for (let letter of word) {
      if (alphaScore.hasOwnProperty(letter)) {
        scoreCount[word] += alphaScore[letter];
      }
    }

    if (scoreCount[word] > highestScore || (scoreCount[word] === highestScore && word < highestWord)) {
      highestScore = scoreCount[word];
      highestWord = word;
    }
  });

  return highestWord;
}


console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("aa b"));
console.log(high("dmavrqpmbjfikwmbxhxrv vcystqjpblspwqcybctgv zpcbwpidiukjwrxijzsfl lfkzbfuwkqwkvnfbakxex"));
