const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer.prompt({ message: "Enter your GitHub username", name: "username" }).then(({ username }) => {
  const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  axios.get(queryUrl).then(({ data }) => {
    const repos = data.map(repo => repo.name);
    fs.writeFile("repos.txt", repos.join("\n"), error => {
      if (error) throw error;
      console.log(repos.length + " repos saved");
    });
  });
});
