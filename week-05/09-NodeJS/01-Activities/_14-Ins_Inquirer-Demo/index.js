const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email"
    }
  ])
  .then(function(response) {
    if (response.confirm === response.password) {
      console.log("Success!");
    } else {
      console.log("You forgot your password already?!");
    }
  });
