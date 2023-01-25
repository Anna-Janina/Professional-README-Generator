const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'project name:',
            message: 'What is the title of the project?'
        },
        {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },
        {
            type: '',
            name: '',
            message: ''
        },




       
        // ## Description
        // ## Table of Contents (Optional)
        // ## Installation
        // ## Usage
        // ## Credits
        // ## License
        // ## Badges
        // ## Features
        // ## How to Contribute
        // ## Tests



])





// .then(function(result){
//     fs.writeFile('log.json', JSON.stringify(results), (err) =>
//         err ? console.error(err) : console.log('Success!')
//     );


// .then((answers) => {
//     const htmlPageContent = generateHTML(answers);
    
//     fs.writeFile('index.html', htmlPageContent, (err) =>
//         err ? console.log(err) : console.log('Successfully created index.html!')
//     );
    
// })


