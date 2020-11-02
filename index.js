var inquirer = require('inquirer');
var mdGen = require('./utils/generateMarkdown');
var fs = require('fs');

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
        name: 'projectRepo',
        message: 'Provide the URL for the github repository for this project.',
    },
    {
        type: 'input',
        name: 'projectDeploy',
        message: 'Provide the deployment URL for this project.',
    },
    // Installation
    {
        type: 'input',
        name: 'installGuide',
        message: 'Provide a description for how to install the project.',
        default: "Run the command: \`\`\`npm install\`\`\`"
    },

    // Usage
    {
        type: 'input',
        name: 'usageGuide',
        message: 'Provide a usage guide.',
    },

    // Contribution
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide details on how to contribute to the project.',
        default: "Please follow the [Contributor Covenant](https://www.contributor-covenant.org/)"
    },

    // test instructions
    {
        type: 'input',
        name: 'testing',
        message: 'Provide details on how to run tests on the code.',
        default: "Tests can be found in the test folder."
    },

    // License Dropdown, list
        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    {
        type: 'list',
        name: 'licensing',
        message: 'Select from an opensource license for this code.',
        choices: ['AGPLv3', 'GPLv3', 'LGPLv3', 'Mozilla_Public_License_2.0', 'Apache_License', 'MIT_License', 'Boost_Software_License_1.0', 'Unlicense']
    },
    {
        type: 'input',
        name: 'screenshot',
        message: "Provide a path to the screenshot from the readme file's final location (leave empty if no screenshot)",
        default: './assets/img/screenshot.png'
    }
];


// function to write README file
function writeToFile(data) {
    readmeString = mdGen(data);
    inquirer.prompt({
        type: "input",
        name: 'fileName',
        message: 'Provide a filename for the markdown file to write to.',
        default: 'README'
    }).then(answer => {
        fs.writeFile(answer.fileName+'.md', readmeString, 'UTF-8', function (err) {
            if (err) return console.log(err);
          });
    })
}

// function to initialize program
function init() {

    inquirer.prompt(questions).then(answers => writeToFile(answers));

}

// function call to initialize program
init();
