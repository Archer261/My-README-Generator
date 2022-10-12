// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');


// Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: "What is your project title?",

    },
    {
        name: 'description',
        type: 'input',
        message: "What is your project description?"
    },

    {
        name: 'contributing',
        type: 'input',
        message: "Who are your contributors?"
    },
    {
        name: 'installation',
        type: 'input',
        message: "Please provide installation instructions?"
    },

    {
        name: 'test',
        type: 'input',
        message: "What are your test instructions?"
    },

    {
        name: 'license',
        type: 'list',
        message: 'What is your project license?',
        choices: [
            {
                name: 'Linux',
            },
            {
                name: 'Mac',
            },
            {
                name: 'Windows',
            },
            {
                name: 'n/a',
            }
        ]
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What is your project usage?'
    },
    {
        name: 'gitUser',
        type: 'input',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'
    },

];

// Prompt user for input
inquirer.prompt(questions)
    .then((data) => {
        const fileName = 'README.md';
        fs.writeFile(fileName, generate(data), (err) => {
            if (err)
                console.log(err);
            else {

                console.log("File written successfully\n");

            }
        });

    })

function init() { }

init();
