// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data.license !== "none") {
    return `![GitHub License](https://img.shields.io/badge/license-${data.license})`
  } return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.license !== "none"){
    return `[License](#license)`
  } return "";
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license !== "none"){
    return `This project is using the ${data.license} license.`
  } return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  *[License](#license)

  ## Installation
  ${data.github}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}


  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.test}

  ## Questions
  ${data.github}
  
`;
}

module.exports = generateMarkdown;
