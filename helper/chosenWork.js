/* eslint-disable comma-dangle */
/* all functions that chosen from main file */

// dependencies
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const filterWord = require('./filterWord');

// main object
const result = {};

// global object and functions
const presentLetters = [];
const notPresentLetters = [];

function isLetter(letter) {
    return letter.length === 1 && letter.match(/[a-z]/i);
}

// Filter by present letters
result.choiceOne = (wordList) => {
    let filteredWord = [];
    console.log(chalk.blue('***[please enter only SINGLE letter]***'));
    let position = readlineSync.question(chalk.red.bold('position(1-5) -> '));
    position = parseInt(position, 10);
    const letter = readlineSync.question(chalk.red.bold('single letter(a-z) -> ')).toLowerCase();
    if (!isLetter(letter)) {
        console.log(chalk.red('***[please enter only SINGLE letter]***'));
    } else if (position < 1 || position > 5) {
        console.log(chalk.red("***[letter's position should be 1-5 ]***"));
    } else {
        filteredWord = filterWord.filterWithSingleLetter(wordList, position, letter);
        if (filteredWord.length === 0) {
            filteredWord = 0;
        }
        return filteredWord;
    }
    filteredWord = 0;
    return filteredWord;
};

// Filter by present letters
result.choiceTwo = (wordList) => {
    const lenOfPL = presentLetters.length;
    const availableToEnter = 25 - lenOfPL;
    console.log(chalk.blue('already entered PRESENT letters = ', +lenOfPL));
    console.log(chalk.blue('***[please enter value properly]***'));
    let numOfLetters = readlineSync.question(
        chalk.red.bold(`How many letters PRESENT? (1-${availableToEnter}) -> `)
    );
    numOfLetters = parseInt(numOfLetters, 10);
    if (numOfLetters > availableToEnter || numOfLetters < 1) {
        console.log(chalk.red(`Number of letter should be in 1-${availableToEnter} !`));
        return 0;
    }
    console.log(chalk.blue(`Enter ${numOfLetters} letters ONE by ONE..`));
    while (numOfLetters) {
        const letter = readlineSync
            .question(chalk.red.bold('PRESENT letter(a-z) -> '))
            .toLowerCase();
        if (isLetter(letter)) {
            presentLetters.push(letter);
            numOfLetters -= 1;
        } else {
            console.log(chalk.red('Please enter SINGLE letter(a-z)'));
        }
    }

    console.log(`PRESENT letters = ${presentLetters}`);
    let filteredWord = filterWord.filterWitPresentLetters(wordList, presentLetters);
    if (filteredWord.length === 0) {
        filteredWord = 0;
    }
    return filteredWord;
};

// Filter by non-present letters
result.choiceThree = (wordList) => {
    const lenOfNPL = notPresentLetters.length;
    const availableToEnter = 25 - lenOfNPL;
    console.log(chalk.blue('Already entered NOT-PRESENT letters = ', +lenOfNPL));
    console.log(chalk.blue('***[please enter value properly]***'));
    let numOfLetters = readlineSync.question(
        chalk.red.bold(`How many letters NOT-PRESENT?(1-${availableToEnter}) -> `)
    );
    numOfLetters = parseInt(numOfLetters, 10);
    if (numOfLetters > availableToEnter || numOfLetters < 1) {
        console.log(chalk.red(`Number of letter should be in 1-${availableToEnter} !`));
        return 0;
    }
    console.log(chalk.blue(`Enter ${numOfLetters} letters ONE by ONE..`));
    while (numOfLetters) {
        const letter = readlineSync
            .question(chalk.red.bold('NOT-PRESENT letter(a-z) -> '))
            .toLowerCase();
        if (isLetter(letter)) {
            notPresentLetters.push(letter);
            numOfLetters -= 1;
        } else {
            console.log(chalk.red('Please enter SINGLE letter(a-z)'));
        }
    }

    console.log(`not-present letters = ${notPresentLetters}`);
    let filteredWord = filterWord.filterWithNotPresentLetters(wordList, notPresentLetters);
    if (filteredWord.length === 0) {
        filteredWord = 0;
    }
    return filteredWord;
};

// Filter by present and non-present letters
result.choiceFour = (wordList) => {
    console.log(`present letters = ${presentLetters}`);
    console.log(`not-present letters = ${notPresentLetters}`);
    const wordWithNonPresent = filterWord.filterWithNotPresentLetters(wordList, notPresentLetters);
    let filteredWord = filterWord.filterWitPresentLetters(wordWithNonPresent, presentLetters);
    if (filteredWord.length === 0) {
        filteredWord = 0;
    }
    return filteredWord;
};

// Showing present and not-present letters
result.choiceFive = () => {
    if (presentLetters.length !== 0 && notPresentLetters.length !== 0) {
        console.log('                       ');
        console.log(`present letters that entered = ${presentLetters}`);
        console.log(`not-present letters that entered = ${notPresentLetters}`);
        console.log('                       ');
    } else {
        if (presentLetters.length === 0) {
            console.log('no present letters entered');
        }
        if (notPresentLetters.length === 0) {
            console.log('no not-present letters entered');
        }
    }
};

// Clearing present and not-present
result.choiceSix = () => {
    result.choiceFive();
    console.log(chalk.red('1 - Clear PRESENT letters'));
    console.log(chalk.red('2 - Clear NOT-PRESENT letters'));
    const chosen = readlineSync.question(chalk.blue.bold('choose(1,2) -> '));
    if (chosen !== '1' || chosen !== '2') {
        console.log(chalk.red('Invalid choice! Choose 1 or 2'));
    } else if (chosen === '1') {
        presentLetters.length = 0;
    } else {
        notPresentLetters.length = 0;
    }
};

// Filter into previous result
result.choiceNine = (pWordList) => {
    let filteredWord = [];
    console.log(chalk.blue('[ going deep (^_<) ]'));
    const chosenKey = readlineSync.question(chalk.red.bold('which filter(1,2,3,4) -> '));
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
            filteredWord = result.choiceFive(pWordList, presentLetters, notPresentLetters);
            break;
        default:
            filteredWord = pWordList;
            console.log(chalk.red.bold('Invalid Choice! Please try again..'));
            break;
    }
    return filteredWord;
};

module.exports = result;
