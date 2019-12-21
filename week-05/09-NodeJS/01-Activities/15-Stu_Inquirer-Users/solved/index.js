const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      choices: ["HTML", "CSS", "English", "Russion", "Chinese"],
      name: "languages"
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      choices: ["email", "phone", "text", "linkedin", "fb"],
      name: "communication"
    }
  ])
  .then(function(response) {
    fs.writeFile(response.name + ".json", JSON.stringify(response, null, "\t"), err => {
      if (err) throw err;
      console.log("success");
    });
  });
