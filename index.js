/* main file */

// dependencies
const readlineSync = require('readline-sync');
const chalk = require('chalk');

const fetchFile = require('./fetchFile');
const terminaldesign = require('./terminalDesign');
const chosenWork = require('./chosenWork');

// terminal design(info)
terminaldesign.welcome();
terminaldesign.options();

// fetching word and letters from file
const wordList = fetchFile.fetchFromFile('./Files/WordList.txt');
const notPresentLetters = fetchFile.fetchFromFile('./Files/NotPresentLetters.txt');
const presentLetters = fetchFile.fetchFromFile('./Files/PresentLetters.txt');

// global variable to control logic
let previousResult = [];
let loopMe = true;
let skipPrint = false;
const failedString = 'Sorry, Not Found! Please try again with proper way!';

while (loopMe) {
    // read from terminal
    const chosenKey = readlineSync.question(chalk.red.bold('[0 for Exit] Choose -> '));
    skipPrint = false;

    switch (chosenKey) {
        case '1':
            previousResult = chosenWork.choiceOne(wordList);
            break;

        case '2':
            previousResult = chosenWork.choiceTwo(wordList, presentLetters);
            break;

        case '3':
            previousResult = chosenWork.choiceThree(wordList, notPresentLetters);
            break;

        case '4':
            previousResult = chosenWork.choiceFour(wordList, presentLetters, notPresentLetters);
            break;

        case '9':
            previousResult = chosenWork.choiceNine(
                previousResult,
                presentLetters,
                notPresentLetters,
            );
            break;

        case '0':
            loopMe = false;
            skipPrint = true;
            terminaldesign.goodBye();
            break;

        default:
            skipPrint = true;
            console.log(chalk.red.bold('Invalid Choice!'));
            break;
    }

    if (previousResult === 0) {
        loopMe = false;
        skipPrint = true;
        console.log(failedString);
        terminaldesign.goodBye();
    }
    if (!skipPrint) {
        console.log(previousResult);
        console.log('                       ');
        console.log(chalk.blue.bold('===>>> 9 - Want to filter into this result <<<==='));
    }
    terminaldesign.extraSpace();
}