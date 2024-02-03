const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    default: "Software Project",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project in one sentence?",
    default: "The project aims to create some software",
  },
  {
    type: "input",
    name: "installation",
    message: "How do we install the application?",
    default: "Automatically in the browser",
  },
  {
    type: "input",
    name: "usage",
    message: "How is the application used?",
    default: "Automatically in the browser",
  },
  {
    type: "input",
    name: "contribution",
    message: "Who collaborated with you on the project?",
    default: "This application had no collaborators",
  },
  {
    type: "input",
    name: "test",
    message: "How do we test the application?",
    default: "There are a set of test scripts available",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you want for this project?",
    default: "MIT",
    choices: ["MIT", "Apache License 2.0", "BSD License"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
    default: "johndck",
  },
  {
    type: "input",
    name: "email",
    message: "What is your business email address?",
    default: "johndck",
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log("Thank you for your answers");
    //console.log(answers);
    //console.log(answers.title);
    console.log(answers);

    // create the markdown file with the answers
    const results = generateMarkdown(answers);
    console.log(results);
    const filename = "README.md";
    console.log(filename);

    fs.writeFile(filename, results, (err) =>
      err ? console.log(err) : console.log("file created")
    );
    // store the write file
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("current environment issue");
    } else {
      console.log("sorry we had a problem");
    }
  });
