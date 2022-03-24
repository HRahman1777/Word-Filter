/*  word fetching from file
 *
 *  Big Word List Copied From (dracos) https://gist.github.com/dracos/dd0668f281e685bad51479e5acaadb93
 *  Small Word List Copied From (zulkarnine) https://github.com/zulkarnine/WordleSolver/blob/main/all_wordle_words.txt
 */

// dependencies
const chalk = require('chalk');
const fs = require('fs');

// main object
const result = {};

result.fetchFromFile = (path) => {
    let myArray = [];
    try {
        const data = fs.readFileSync(path, 'utf-8');
        myArray = data.split(/\r?\n/); // converting into array
    } catch (error) {
        console.log(chalk.red(`Failed To Fetch From ${path} - ${error}`));
    }
    return myArray;
};

module.exports = result;
