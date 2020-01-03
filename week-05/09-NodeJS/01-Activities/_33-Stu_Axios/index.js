const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer.prompt({ message: "Enter your GitHub username", name: "username" }).then(({ username }) => {
  const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  axios.get(queryUrl).then(function(res) {
    const repoNames = res.data.map(repo => repo.name);
    fs.writeFile("repos.txt", repoNames.join("\n"), err => {
      if (err) throw err;
      console.log(repoNames.length + " repos saved");
    });
  });
});
