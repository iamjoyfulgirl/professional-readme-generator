<h1 align="center">Professional README.md Generator</h1>

## Description

This is a Node.js application that takes in user input from inquirer prompts in the command line to generate a README.md file for the user's repository.

## Installation

The user should clone the repository from GitHub and install Node.

This application also imports and uses the file system and inquirer modules.

## Usage

In the command line, enter `node index` and press enter to run the application.

Using the command line, answer questions about the project to create a README.md file. Once all prompts are answered, a README.md file will be created in the './instructions' directory.

## 📽 Walkthrough video of using the Professional README Generator:

![walkthrough](./utils/walkthru-demo.gif)

Or view the video here: [Screencastify](https://drive.google.com/file/d/12ezxrm3SjItQwzW7AR5YTRJWWQ6TfK3x/view)

## Acceptance Criteria

```
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
