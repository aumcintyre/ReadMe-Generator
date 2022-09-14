// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {answers.license}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {answers.license}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  *Links go here

  ## Installation
  ${data.github}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  ${data.github}
  

`;
}

module.exports = generateMarkdown;
