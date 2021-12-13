#professional-README-generator
# Table of Contents:
* [Project Description](#description)
* [Task Completed](#task-completed)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation-setup)
* [Screenshots and Video Link of application](#screenshots-and-video)
* [Links](#links)
* [Credits](#credits)
* [License](#license)

# DESCRIPTION
Let's create a high-quality README for your application or any open source project on GitHub. We'll include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project. 

## TASK COMPLETED
Created a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer) and [node.js](https://nodejs.org/en/).

# USER STORY
```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

# ACCEPTANCE CRITERIA
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

# INSTALLATION SETUP
**MANDATORY REQUIREMENT FOR SUCCESSFUL APPLICATION:**  **NODE.JS MUST BE INSTALLED!**

1. Download all files from the repository.
2. CD into the repository.
3. Run this command to install inquirer
```md
npm install inquirer
```
4. Run this command to run the application
```md
node index.js
```

# SCREENSHOTS AND VIDEO
[Walkthrough Video](https://drive.google.com/file/d/10h8JkUd-e5Qsp11bs9nl-gMYgXjlq9Y8/view)
# LINKS
* [Link to the deployed website]()
* ![Screenshot](images/ScreenShot-2021-12-12.png)
* [Link to the code repository](https://github.com/kitchen-boy/professional-readme-generator) 

# CREDITS
Kaye Chen-Boyce

### References and tutorials utilized
* [Guide to a Professional README](https://github.com/coding-boot-camp/potential-enigma/blob/main/readme-guide.md)
* [https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
* BCS Learning Assistant
* [How to use Inquirer](https://www.npmjs.com/package/inquirer)
* [A collection of common interactive command line user interfaces](https://github.com/SBoudrias/Inquirer.js)
* Tutor Alexis San Javier


# LICENSE
MIT License

Copyright (c) [2021] [Kaye Chen-Boyce]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


