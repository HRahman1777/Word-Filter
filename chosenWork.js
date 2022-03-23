/* all functions that chosen from main file */

// dependencies
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const filterWord = require('./filterWord');

// main object
const result = {};

// Filter by present letters
result.choiceOne = (wordList) => {
    console.log(chalk.blue('***[please enter only single and small letter]***'));
    const letter = readlineSync.question(chalk.red.bold('single letter(a-z) -> '));
    const position = readlineSync.question(chalk.red.bold('position(1-5) -> '));
    let filteredWord = filterWord.filterWithSingleLetter(wordList, position, letter);
    if (filteredWord.length === 0) {
        filteredWord = 0;
    }
    return filteredWord;
};

// Filter by present letters
result.choiceTwo = (wordList, presentLetters) => {
    let filteredWord = filterWord.filterWitPresentLetters(wordList, presentLetters);
    if (filteredWord.length === 0) {
        filteredWord = 0;
    }
    return filteredWord;
};

// Filter by non-present letters
result.choiceThree = (wordList, notPresentLetters) => {
    let filteredWord = filterWord.filterWithNotPresentLetters(wordList, notPresentLetters);
    if (filteredWord.length === 0) {
        filteredWord = 0;
    }
    return filteredWord;
};

// Filter by present and non-present letters
result.choiceFour = (wordList, presentLetters, notPresentLetters) => {
    const wordWithNonPresent = filterWord.filterWithNotPresentLetters(wordList, notPresentLetters);
    let filteredWord = filterWord.filterWitPresentLetters(wordWithNonPresent, presentLetters);
    if (filteredWord.length === 0) {
        filteredWord = 0;
    }
    return filteredWord;
};

// Filter into previous result
result.choiceNine = (pWordList, presentLetters, notPresentLetters) => {
    let filteredWord = [];
    console.log(chalk.blue('[ going deep (^_<) ]'));
    const chosenKey = readlineSync.question(chalk.red.bold('which filter -> '));
    switch (chosenKey) {
        case '1':
            filteredWord = result.choiceOne(pWordList);
            break;
        case '2':
            filteredWord = result.choiceTwo(pWordList, presentLetters);
            break;
        case '3':
            filteredWord = result.choiceThree(pWordList, notPresentLetters);
            break;
        case '4':
            filteredWord = result.choiceFour(pWordList, presentLetters, notPresentLetters);
            break;
        default:
            filteredWord = pWordList;
            console.log(chalk.red.bold('Invalid Choice! Please try again..'));
            break;
    }
    return filteredWord;
};

module.exports = result;
