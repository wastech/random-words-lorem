// random-words-lorem.mjs

const loremWords = [
  'Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
  'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore'
  // Add more words here
];

function getRandomSentence(wordCount = 5) {
  const randomWords = [];
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * loremWords.length);
    randomWords.push(loremWords[randomIndex]);
  }
  return randomWords.join(' '); // Join words to form a sentence
}

export { getRandomSentence };
