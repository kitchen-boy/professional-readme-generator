// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
    # README.md_Generator
    ${answers.projectTitle}

    # Table of Contents
    ${answers.tableOfContents}

    ${badge}

    # DESCRIPTION
    ${answers.description}

    # INSTALLATION
    ${answers.installation}

    # USAGE
    ${answers.usage}

    # CONTRIBUTING
    ${answers.contributing}

    # TESTS
    ${answers.tests}

    # QUESTIONS
    ## GitHub Username
    ${answers.github}
    ## Email
    ${answers.email}

    # LICENSE
    ${answers.license}

    Copyright 2020 &copy;
`;
}

module.exports = generateMarkdown;