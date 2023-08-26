// example.mjs

import { getRandomSentence } from './random-words-lorem.mjs';

const randomSentence = getRandomSentence(10); // Generate a sentence with 10 words
const sentenceWithoutCommas = randomSentence.replace(/,/g, ''); // Remove commas

console.log(sentenceWithoutCommas);
