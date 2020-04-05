const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsyncPromise = util.promisify(fs.appendFile);
const readFileAsyncPromise = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };
const url = "https://icanhazdadjoke.com/";

axios
  .get(url, config)
  .then(({ data }) => {
    appendFileAsyncPromise("jokes.txt", data.joke + "\n").then(() => {
      readFileAsyncPromise("jokes.txt", "utf8").then((jokes) => console.log(jokes));
    });
  })
  .catch((error) => console.log(error));
