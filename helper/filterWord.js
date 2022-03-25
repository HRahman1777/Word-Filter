/*  word filtering
 */

// main object
const result = {};

result.filterWithNotPresentLetters = (wordList, notPresentLetters) => {
    const filteredArray = [];
    for (let index = 0; index < wordList.length; index += 1) {
        const element = wordList[index];
        let hasPass = true;
        for (let indexTwo = 0; indexTwo < notPresentLetters.length; indexTwo += 1) {
            if (element.indexOf(notPresentLetters[indexTwo]) >= 0) {
                hasPass = false;
                break;
            }
        }
        if (hasPass) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
};

result.filterWitPresentLetters = (wordList, presentLetters) => {
    const filteredArray = [];
    for (let index = 0; index < wordList.length; index += 1) {
        const element = wordList[index];
        let count = 0;
        for (let indexTwo = 0; indexTwo < presentLetters.length; indexTwo += 1) {
            if (element.indexOf(presentLetters[indexTwo]) >= 0) {
                count += 1;
            }
        }
        if (count === presentLetters.length) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
};

result.filterWithSingleLetter = (wordList, position, letter) => {
    const filteredArray = [];
    for (let index = 0; index < wordList.length; index += 1) {
        const element = wordList[index];
        if (element[position - 1] === letter) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
};

module.exports = result;
