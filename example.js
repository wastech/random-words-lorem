// example.js

const randomWordsLorem = require('./random-words-lorem');

const randomSentence = randomWordsLorem.getRandomSentence(10); // Generate a sentence with 10 words
const sentenceWithoutCommas = randomSentence.replace(/,/g, ''); // Remove commas

console.log(sentenceWithoutCommas);
