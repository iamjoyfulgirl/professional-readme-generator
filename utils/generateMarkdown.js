// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.project_title}
  ![badge](http://img.shields.io/badge/license-${data.license}-blue)<br />
  
## Description
${data.description}
  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Questions](#questions)
* [Tests](#tests)
* [License](#license)
      
## Installation
${data.installation}
  
## Usage 
${data.usage} 
      
## Contributing
${data.contributing}

## Questions?
Questions about this project can be directed to:
- Email: ${data.email}. 
- You can view more of my projects at ${data.github_url}.

## Tests
${data.tests}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />     
Content in this project is covered by the ${data.license} license. 



-----------

Copyright [${data.copyright_year}] [${data.author}]`;
}

// use for importing markdown in index
module.exports = generateMarkdown;
