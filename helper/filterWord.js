/*  word filtering
 */

// main object
const result = {};

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
