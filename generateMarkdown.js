// Generate the additional license info

// Create the badge
// Create the license link
// Create the license section

// Create the markdown file

function generateMarkdown(answers) {
  return `
  # ${answers.title}
  ## Table of contents
  [description](#description)
  [installation](#installation)
  `;
}

module.exports = generateMarkdown;
