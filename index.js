// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown');
const licenseText = require('./licenses.js')
const badgeIcon = require('./badges.js')


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
            name: 'projectTitle',
            message: 'What is the title of your project? (Required)',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                  return true;
                } else {
                  console.log('Please enter the title!');
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
            type: 'confirm',
            name: 'confirmTable',
            message: 'Would you like to add a Table of Contents?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'tableOfContents',
            message: "Add a Table of Contents. (Check all that apply)",
            when: ({confirmTable}) => {
                if (confirmTable) {
                    return true;
                } else {
                    return false;
                }
            },
            choices: [
                'Description', 
                'Installation', 
                'Usage', 
                'Contributing', 
                'Tests', 
                'Questions',
                'License']
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
                'Apache License',
                'GNU',
                'ISC License', 
                'MIT License',
                'Mozilla Public License 2.0'
            ]
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
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('.')
    })
}

//TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
promptUser()
    .then(promptProject => {
        return generateReadMe(promptProject);
    })
    .then(fileREADME => {
        return fs.writeFile(fileREADME);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });