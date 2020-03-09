const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };
const url = "https://icanhazdadjoke.com/";

axios
  .get(url, config)
  .then(({ data }) => {
    appendFileAsync("jokes.txt", data.joke + "\n").then(() => {
      readFileAsync("jokes.txt", "utf8").then(jokes => console.log(jokes));
    });
  })
  .catch(error => console.log(error));
