const inquirer = require('inquirer');
const fs = require('fs');

    const generateREADME = ({title, motivation, solution, lessons, steps, instructions, screenshot, collaborators, license}) =>
   `# ${title}

   ## Description
   
   ${motivation}
   ${solution}
   ${lessons}
 
   
   ## Table of Contents 
   
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [License](#license)
   
   ## Installation
   
   ${steps}

   ## Usage
   
   ${instructions} 

   ${screenshot}
    
   
   ## Credits
   
   ${collaborators}
   
   ## License
   
   ${license}`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
      
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
      },
    {
        type: 'input',
        name: 'solution',
        message: 'What problem does it solve?',
      },
    {
        type: 'input',
        name: 'lessons',
        message: 'What did you learn?',
    },
    {   
        type: 'input',
        name: 'steps',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Please provide instructions and examples for use',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Provide the screenshot (ex: ![alt text](assets/images/screenshot.png)',
    },
    {   type: 'input',
        name: 'collaborators',
        message: 'List your collaborators',
    },
    {    type: 'input',
        name: 'collaborators',
        message: 'List your collaborators',
    },
    {    type: 'input',
        name: 'license',
        message: 'List your licenses',
    }
 
  ])
  .then((data) => {
    const readmeContent = generateREADME(data);

    // const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Your README is ready'));
  });
  