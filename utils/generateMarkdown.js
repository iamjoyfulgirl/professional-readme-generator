// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.project_title}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  
## Description
${data.description}
  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
${data.installation}
  
## Usage 
${data.usage} 
      
## Contributing
*If you would like to contribute this project, you can follow these guidelines for how to do so.*
<br />
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

README Generator - Copyright ${data.copyright_year} ${data.author}`;
}

// use for importing markdown in index
module.exports = generateMarkdown;
