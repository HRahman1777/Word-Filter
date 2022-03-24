/* all terminal design */

// dependencies
const chalk = require('chalk');

// main object
const result = {};

result.welcome = () => {
    console.log(chalk.blue.bold('========================'));
    console.log(chalk.green.bold('<====  Word Filter ====>'));
    console.log(chalk.green.bold('<=== by HRahman1777 ===>'));
    console.log(chalk.blue.bold('========================'));
};

result.options = () => {
    console.log('                       ');
    console.log(chalk.red.bold('***[ PLEASE FOLLOW THE INSTRUCTION ]***'));
    console.log(chalk.blue.bold('--------------------------'));
    console.log(chalk.blue.bold('Choose Your Option'));
    console.log(chalk.blue.bold('--------------------------'));
    console.log(chalk.blue('1 - Filter With SINGLE Letter With POSITION'));
    console.log(chalk.blue('2 - Filter With PRESENT Letters'));
    console.log(chalk.blue('3 - Filter With NOT-PRESENT Letters'));
    console.log(chalk.blue('4 - Run 2,3 Together'));
    console.log(chalk.blue('5 - Show PRESENT and NOT-PRESENT Letters That Entered'));
    console.log(chalk.blue('6 - Clear PRESENT and NOT-PRESENT Letters'));
    console.log(chalk.blue('0 - For Exit'));
    console.log('                       ');
};

result.goodBye = () => {
    console.log('                       ');
    console.log(chalk.blue.bold('------------------------'));
    console.log(chalk.blue.bold('------  Good Bye  ------'));
    console.log(chalk.green.bold('<=== Thank You For ====>'));
    console.log(chalk.green.bold('<===   Your Time    ===>'));
    console.log(chalk.blue.bold('------------------------'));
};

result.extraSpace = () => {
    console.log('                       ');
    console.log('                       ');
    console.log('                       ');
};

module.exports = result;
