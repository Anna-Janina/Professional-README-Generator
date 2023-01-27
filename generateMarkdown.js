 function generateMarkdown(answers) {
    return `
    # ${answers.title}
    ![GitHub](https://img.shields.io/github/license/Anna-Janina/Professional-README-Generator?style=plastic)


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


module.exports = MarkDown