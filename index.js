var inquirer = require('inquirer');
var dataToPass = {};

// array of questions for user
const questions = [
    // input, list, checkbox
    // data.projectName
    {
        type: 'input'
        name: 'projectName'
        message: 'What is the name of this project?'
        choices: ''
    }

];


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

    // prompt(questions).then(/* ... */);

}

// function call to initialize program
init();
