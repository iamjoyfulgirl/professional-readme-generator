// import required modules
const inquirer = require("inquirer");
const fs = require("fs");

// linking to file where the README is developed
const generatePage = require("./utils/generateMarkdown.js");

// const generateMarkdown = ({
//     project_title,
//     description,
//     installation,
//     usage,
//     contributing,
//     github_url,
//     email,
//     tests,
//     copyright_year,
//     author,
// }) =>
//     `# ${project_title} ![](https://img.shields.io/badge/license-MIT-blue)
// ## Description
// ${description}

// ## Table of Contents

// * [Installation](#installation)
// * [Usage](#usage)
// * [Credits](#credits)
// * [Contributing](#contributing)
// * [Questions](#questions)
// * [Tests](#tests)
// * [License](#license)

// ## Installation

// ${installation}

// ## Usage 

// ${usage} 

// ## Contributing

// ${contributing}

// ## Questions?

// Questions about this project can be directed to: 
// - Github: ${github_url}
// - Email: ${email}

// ## Tests

// ${tests}

// ## License

// Content in this project is governed under the MIT License. 

// To read the license in its entirety, click here: [MIT](./LICENSE)

// -----------

// Copyright [${copyright_year}] [${author}]`;

const questions = () => {
    // use inquirer to prompt for questions
    return inquirer.prompt([
        {
            type: "input",
            message:
                "Enter the title of your project:",
            name: "project_title",
        },
        {
            type: "list",
            name: "license",
            message:
                "What kind of license should your project have?",
            choices: ["MIT", "GNU"],
            default: ["MIT"],
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(
                        "Please choose a license!"
                    );
                    return false;
                }
            },
        },
        {
            type: "input",
            message:
                "Please write a description of your project:",
            name: "description",
        },
        {
            type: "input",
            message:
                "What are the steps required to install your project?",
            name: "installation",
        },
        {
            type: "input",
            message:
                "How do you use this app?",
            name: "usage",
        },
        {
            type: "input",
            message:
                'What does the user need to know about contributing to the repo? If you do not allow contributions, type "N/A":',
            name: "contributing",
        },
        {
            type: "input",
            message:
                "What is the URL to your Github?:",
            name: "github_url",
        },
        {
            type: "input",
            message:
                "Enter your email address if a user has questions about your project:",
            name: "email",
        },
        {
            type: "input",
            message:
                'Go the extra mile and write tests for your application. Then provide examples on how to run them here, or type "N/A".',
            name: "tests",
        },
        {
            type: "input",
            message:
                "Enter a copyright year for your project:",
            name: "copyright_year",
        },
        {
            type: "input",
            message:
                "Enter your name for the copyright section of the README:",
            name: "author",
        },
    ]);
};

// function write README file using file system system
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};

// function to initialize program
questions()
    // get user answers
    .then(answers => {
        return generatePage(answers);
    })
    //using data to display on page
    .then(data => {
        return writeFile(data);
    });
