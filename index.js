const inquirer = require('inquirer');
const fs = require('fs');

const licenseList = [

    'None',
    'Apache License 2.0',
    'GNU General Public License v3.0',
    'MIT License',
    'Boost Software License 1.0',
    'Creative Commons Zero v1.0 Universal',
    'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0',
    'Mozilla Public License 2.0',
    'The Unlicense',
]
// Badge links for licenses
let licenseLinks = {
    'Apache License 2.0':{
        img: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
        link: "https://opensource.org/licenses/Apache-2.0",
    },
    'GNU General Public License v3.0':{
        img: "https://img.shields.io/badge/License-GPLv3-blue.svg",
        link: "https://www.gnu.org/licenses/gpl-3.0",
    },
    'MIT License':{
        img: "https://img.shields.io/badge/License-MIT-yellow.svg",
        link: "https://opensource.org/licenses/MIT",
    },
    'Boost Software License 1.0':{
        img: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
        link: "https://www.boost.org/LICENSE_1_0.txt",
    },
    'Creative Commons Zero v1.0 Universal':{
        img: "https://licensebuttons.net/l/zero/1.0/80x15.png",
        link: "http://creativecommons.org/publicdomain/zero/1.0/",
    },
    'Eclipse Public License 2.0':{
        img: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
        link: "https://opensource.org/licenses/EPL-1.0",
    },
    'GNU Affero General Public License v3.0':{
        img: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
        link: "https://www.gnu.org/licenses/agpl-3.0",
    },
    'Mozilla Public License 2.0':{
        img: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
        link: "https://opensource.org/licenses/MPL-2.0",
    },
    'The Unlicense':{
        img: "https://img.shields.io/badge/license-Unlicense-blue.svg",
        link: "http://unlicense.org/",
    },
  }
  
  // Get the license badge for the given license. And make the markdown for it.
  function getLicenseBadge(license) {
      let licenceBadge = ``;
  
      if (licenseLinks[license]) {
          licenceBadge = `[![License](${licenseLinks[license].img})](${licenseLinks[license].link})`;
      }
    
      return licenceBadge;
  }
  
  // Generates the markdown for the readme file and returns it

const generateREADME = ({title, motivation, solution, lessons, steps, instructions, screenshot, GitHub, email, license}) =>
   
`# ${title}


   ## Description
   
  - ${motivation}
  - ${solution}
  - ${lessons}
 
   
   ## Table of Contents 
   
   - [Installation](#installation)
   - [Usage](#usage)
   - [Questions](#questions)
   - [License](#license)
   
   ## Installation
   
   ${steps}

   ## Usage
   
   ${instructions} 

   ${screenshot}
    
   
   ## Questions
   
   In case you have any additional questions, please contact me:
   \n<a href="https://github.com/${GitHub}">GitHub</a>\n
   \nEmail: ${email}\n
   
   ## License
   
   ${getLicenseBadge(license)}`

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
        name: 'GitHub',
        message: 'Enter your GitHub username',
    },
    {    type: 'input',
        name: 'email',
        message: 'Enter your email address',
    },
    {    type: 'input',
        name: 'license',
        choices: licenseList,
    }
 
  ])

  
  .then((data) => {
    const readmeContent = generateREADME(data);

    const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;

    fs.writeFile(filename, readmeContent, (err) =>
      err ? console.log(err) : console.log('Your README is ready'));
  });
  
