const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

// axios.get("https://icanhazdadjoke.com/", config).then(({ data }) => {
//   appendFileAsync("jokes.txt", data.joke + "\n").then(() => {
//     readFileAsync("jokes.txt", "utf-8").then(data => {
//       console.log(data);
//     });
//   });
// });

axios.get("https://icanhazdadjoke.com/", config).then(({ data }) => {
  appendFileAsync("jokes.txt", data.joke + "\n").then(() => {
    readFileAsync("jokes.txt", "utf-8").then(data => {
      console.log(data);
    });
  });
});
