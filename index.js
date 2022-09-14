// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a brief description of your project',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license will your project use?',
        choices: ['MIT', 'GNU'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What steps are taken to install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Which command will be used to test your project?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What do future contributors need to know about this project?',
        name: 'contributors',
    },

];
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    // questions()
    // .then(responses => {
    //     return readmeTemplate(responses)
    // })
    // .then(data => {
    //     return writeToFile(data)
    // })
    inquirer.prompt(questions)
        .then((responses) => {
            console.log("SUCCESS");
            writeToFile('README.md', generateMarkdown({ ...responses }));
        })
}

// Function call to initialize app
init();