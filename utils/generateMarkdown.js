// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # [${data.projectName}](${data.projectDeploy})

  ## Description 
  ${data.projectDesc}

  ## Table of Contents  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Contact](#contact)
  
  
  ## Installation
  
  ${data.installGuide}
  
  ## Usage 
  
  ${data.usageGuide}

  A screenshot of the application can be found below:
  
  ![Sample Screenshot](${data.screenshot})

  
  ## License

  ![license](https://img.shields.io/badge/License-${data.licensing}-informational)
  
  This project is licensed under ${data.licensing}. You can read more about it [here](https://choosealicense.com/licenses/).
  
  ## Contributing
  
  ${data.contribute}

  ## Tests
  
  ${data.testing}  

  ## Contact

  This project is made by [${data.username}](https://www.github.com/${data.username}/), you can send an email to them by clicking [here](mailto://${data.email})
`;
}


module.exports = generateMarkdown;
