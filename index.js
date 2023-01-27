const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./generateMarkdown');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about this repo?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What dependencies do you need to install this project?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can users contribute to your project?'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'What command should be run to run the test?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is your email for questions?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose your license for your project',
            choices: ['MIT', 'BSD3', 'LGPL', 'Apache', 'Other', 'None']
        },
])





// .then(function(result){
//     fs.writeFile('log.json', JSON.stringify(results), (err) =>
//         err ? console.error(err) : console.log('Success!')
//     );


// .then((answers) => {
//     const readmePageContent = generateReadme(answers);
    
//     fs.writeFile('readme-generate.md', readmePageContent, (err) =>
//         err ? console.log(err) : console.log('Success!')
//     );
    
// })

.then((answers) => {
    // TODO: Create a function to write README file
    const filename = data.title.replace(' ', "").toLowerCase()
    fs.writeFile(`${filename}.md`, generateMarkDown(answers), (err) =>
        err ? console.error(err) : console.log("Success!"))
})
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();