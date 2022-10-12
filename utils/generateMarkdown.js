// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  switch (license) {
    case "Linux":
      badge = '[![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)';
      break;

    case "Mac":
      badge = '[![macOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white)](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white)';
      break;

    case "Windows":
      badge = '[![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)';
      break;

    case "n/a":
      badge = null;
      break;
    default:
      badge = null;
  }
  console.log(license)
  return badge;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
## Description 

${data.description}

## Table of Contents 

  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Tests](#Test)
  5. [Contributing](#Contributing)
  6. [Repository Link](#Repository)
  7. [Github Info](#Github)
  8. [Questions](#Questions)


### Installation 

${data.installation}

### Usage 

${data.usage}


### Tests 

${data.test}

### License 

${data.license}


### Contributing 

${data.contributing}


### Questions 

**Github Information**

Username: ${data.gitUser}

Profile: <https://github.com/${data.gitUser}>

If you have any additional questions, I can be reached via email at <${data.email}>

`;
}

module.exports = generateMarkdown;
