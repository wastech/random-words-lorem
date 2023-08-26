## Description
The "random-words-lorem" module is a utility that generates random text resembling Lorem Ipsum. It provides a simple way for developers to generate placeholder text for testing or design purposes. This module combines the concept of generating random words with the familiar look of Lorem Ipsum text, allowing users to quickly populate content in their projects with randomized content that mirrors the structure of the famous placeholder text.


## Usage
You can use this module to generate random words in the style of Lorem Ipsum. Follow these steps to get started:
### Installation
Install the module in your project by running the following command in your terminal:

```Javascript
npm install random-words-lorem 
```

### Create a JavaScript File:

Create a new JavaScript file in your project directory. You can name it anything you like, such as use-module.js.


### Import and Use the Module:
In your JavaScript file (e.g., use-module.js), import the module and generate a random sentence. Here's an example code snippet:

```Javascript
// use-module.js

const randomWordsLorem = require('random-words-lorem');

const randomSentence = randomWordsLorem.getRandomSentence(10); // Generate a sentence with 10 words
const sentenceWithoutCommas = randomSentence.replace(/,/g, ''); // Remove commas

console.log(sentenceWithoutCommas);



```

### Run Your Script:
Open your terminal and navigate to the directory where your JavaScript file is located. Run the script using Node.js:

```Javascript
node use-module.js

#You should see a sentence made up of random words, without any commas.
```
