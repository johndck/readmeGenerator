// Create the markdown file

function createLicenselogo(logo) {
  if (logo === "MIT") {
    return `![MIT image](/mit-license.png)`;
  }
  if (logo === "Apache License 2.0") {
    return `![MIT image](/apache.png)`;
  }
  if (logo === "BSD License") {
    return `![MIT image](/BSD.png)`;
  }
}

function generateMarkdown(answers) {
  return `
# Project ${answers.title}

## License: ** ${createLicenselogo(answers.license)} **

## Table of Contents

- [Description](#Description)
- [Installation](#installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [Testing](#Testing)
- [Questions](#Questions)

## Description

${answers.description}

### What problem does the project solve?

Reduces the time taken on each project to create the supporting README file and ensures consistent content and formatting.

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contribution

${answers.contribution}

## Testing

${answers.test}

## Questions

Key questions need to be listed here.

And, for more questions, you can find more on my Github profile: ${
    answers.github
  }

To contact me directly, you can email me directly at: ${answers.email}

## **License**

This project is covered under license: ${answers.license}

## Credits

This project was undertaken by John Dick without any collaborators for the purposes of assessment on the EDX bootcamp.
  `;
}

module.exports = generateMarkdown;
