// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== ""){
    return 
      `[${license}]((https://img.shields.io/badge/license-${license})}`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
////function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateReadMe(answers) {
  return `
    # README.md_Generator
    ${answers.projectTitle}_README.md \n \n

    # Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing \n \n

    ${badge} \n

    # DESCRIPTION
    ${answers.description} \n

    # INSTALLATION
    ${answers.installation} \n

    # USAGE
    ${answers.usage} \n

    # CONTRIBUTING
    ${answers.contributing} \n
    // add contributor-covenant text???

    # TESTS
    ${answers.tests} \n

    # QUESTIONS
    ## GitHub Username
    Please visit https://github.com/${answers.github} to visit my GitHub profile.
    ## Email
    My email address is ${answers.email}. Feel free to reach me here. \n

    # LICENSE
    ${answers.license} \n

    Copyright 2020 &copy; \n
`;
};

module.exports = generateReadMe;