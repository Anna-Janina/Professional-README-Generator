function renderBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return '';
}

function generateMarkdown(answers) {
return `
# ${answers.title}

${renderBadge(answers.license)}


## Table of Contents
- [Project description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Description
${answers.description}

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contributing
${answers.contributing}

## Tests
${answers.testing}

## Questions
Find me on Github: [${answers.github}](https://github.com/${answers.github})
For any questions, email me at: ${answers.email}

## License
${answers.license}

`
}


module.exports = generateMarkdown