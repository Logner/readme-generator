var inquirer = require('inquirer');
var mdGen = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    // 
    // input, list, checkbox,
        // Github username
        // -> links to github profile
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },

    // email address
        // contact me section
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address for the contact me section.',
        default: 'None'
    },
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of this project?'
    },
    {
        type: 'input',
        name: 'projectDesc',
        message: 'Provide a short Description for the project.'
    },
    {
        type: 'input',
        name: 'projectRepository',
        message: 'Provide the URL for the github repository for this project.',
        default: 'None'
    },
    {
        type: 'input',
        name: 'projectDeploy',
        message: 'Provide the deployment URL for this project.',
        default: "None"
    },
    // Installation
    {
        type: 'input',
        name: 'InstallGuide',
        message: 'Provide a description for how to install the project.',
        default: "Run the command: ```npm install```"
    },

    // Usage
    {
        type: 'input',
        name: 'usageGuide',
        message: 'Provide a usage guide.',
        default: "None"
    },

    // Contribution
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide details on how to contribute to the project.',
        default: "None"
    },

    // test instructions
    {
        type: 'input',
        name: 'testing',
        message: 'Provide details on how to run tests on the code.',
        default: "None"
    },

    // License Dropdown, list
        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    {
        type: 'list',
        name: 'licensing',
        message: 'Select from an opensource license for this code.',
        choices: ['GNU AGPL V3', 'GNU GPL V3', 'GNU LGPL V3', 'Mozilla Public Licence 2.o', 'Apache Licence', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    }

    // Table of Contents

];


// function to write README file
function writeToFile(fileName, data) {
    readmeString = mdGen.generateMarkdown(data);
    inquirer.prompt({
        type: "input",
        name: 'fileName',
        message: 'Provide a filename for the markdown file to write to.',
        default: 'README'
    }).then(answer => console.log(answer.fileName, readmeString))
}

// function to initialize program
function init() {

    inquirer.prompt(questions).then(answers => console.log(answers));

}

// function call to initialize program
init();
