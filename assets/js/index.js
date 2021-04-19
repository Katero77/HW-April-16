"use strict";


/* 1.*/

const isAnagram = (word1, word2) => [...word1.toLowerCase()].sort().join() === [...word2.toLowerCase()].sort().join();
const testAnagram = {
  "риГа": "игра",
  "ВОЗ" : "зов",
  "aab" : "abb",

};

for(const key in testAnagram){
  console.log(`Call isAnagram() for key: ${key}, and value: ${testAnagram[key]}, result = ${isAnagram(key, testAnagram[key])}`);
  console.log("---------------------------------------------------------------------------");
}

/*2*/

console.log("Task 2");
const lettersCounter = (str, letters) => [...str.toLowerCase()].filter((letter) => letters.includes(letter)).length;

const testLettersCounter = (sentences, letters) => {
  for(const sentence of sentences){
    console.log(`String ${sentence} contains ${lettersCounter(sentence, letters)} vowel letters.`);
  }
}

const ENGLISH_VOWEL = ["a", "e", "i", "o", "u", "y"];

const engSentences = [
  "Never look back",
  "Live without regrets",
  "wqr zxc"
];

testLettersCounter(engSentences, ENGLISH_VOWEL);

/*3*/
console.log("Task 3");
const chooseNegativeNumbers = (numbers) => numbers.filter((number) => number < 0);

console.log(chooseNegativeNumbers([1, 2, 3, 4, 5, 6, 7]));//[]
console.log(chooseNegativeNumbers([-1, 6, -200, 10, 13, -3, 17, 55, 30, -4]));//[-1, -200, -3, -4]
console.log(chooseNegativeNumbers([-3, -5, -6, -10]));//[-3, -5, -6, -10]

/*4 */
