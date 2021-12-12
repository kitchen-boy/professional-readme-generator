// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { file } = require('tmp');
/* const fs = require('fs');
const generateFile = require('./src/file-template');

const fileREADME = generateFile(projectname);

fs.writeFile('./README.md', fileREADME, err => {
    if (err) throw err;

    console.log(README complete! Checkout README.md to see the output!);
});
 */

//TODO: Create an array of questions for user input
const promptUser = () => {
    console.log(`
===================
Add a New README.md
===================
`);
    return inquirer.prompt([    
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'description',
            message: "Write a description of your project. (Required)",
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log ('Please enter your project description!');
                  return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'tableofcontents',
            message: "Add a Table of Contents. (Check all that apply)",
            choices: ['Description', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide a step-by-step description of installation instructions.',
        },
        {
            type: 'input',
            name: 'usage', 
            message: 'Provide instructions and examples for use.',
        },
    
        {
            type: 'list',
            name: 'license',
            message: 'Choose an open source license for this project.',
            choices: [
                'GPL General Public License',
                'Apache License',
                'ISC License',
                'Mozilla Public License 2.0', 
                'MIT License']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Share instructions on how others can contribute to your project.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Share what tests you ran for your project.',
        }, 
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log ('Please enter your GitHub username!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('Please enter your email!');
                    return false
                }
            }
        },
    ]);
};

//TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

//TODO: Create a function to write README file
promptUser().then(answers => console.log(answers));

//TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

