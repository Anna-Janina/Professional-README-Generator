 function generateMarkdown(answers) {
    return `
    # ${answers.title}

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
    ${answers.github}
    ${answers.email}

    ## License
    ${answers.license}

    `
    }
}

module.exports = MarkDown