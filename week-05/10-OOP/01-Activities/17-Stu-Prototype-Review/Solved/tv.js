const axios = require("axios");
const fs = require("fs");

// Create the TV constructor
const TV = function() {};

// Find a tv show actor
TV.prototype.findActor = name => {
  const URL = `http://api.tvmaze.com/search/people?q=${name}`;
  axios
    .get(URL)
    .then(({ data }) => {
      const record = data[0];
      console.log("DATA:", record);

      const showData = [
        "\nName: " + record.person.name,
        "Birthday: " + record.person.birthday,
        "Gender: " + record.person.gender,
        "Country: " + (record.person.country ? record.person.country.name : ""),
        "TV Maze URL: " + record.person.url,
        "-".repeat(60)
      ].join("\n");

      fs.appendFile("log.txt", showData, "utf8", err => {
        if (err) throw err;
        fs.readFile("log.txt", "utf8", (err, data) => console.log(data));
      });
    })
    .catch();
};

// Find a tv show
TV.prototype.findShow = show => {
  const URL = `http://api.tvmaze.com/singlesearch/shows?q=${show}`;
  axios
    .get(URL)
    .then(({ data }) => {
      console.log("DATA", data);

      const showData = [
        "\nShow: " + data.name,
        "Genre(s): " + data.genres.join(", "),
        "Rating: " + data.rating.average,
        "Network: " + data.network.name,
        "TV Maze URL: " + data.url,
        "-".repeat(60)
      ].join("\n");

      fs.appendFile("log.txt", showData, "utf8", err => {
        if (err) throw err;
        fs.readFile("log.txt", "utf8", (err, data) => console.log(data));
      });
    })
    .catch();
};

module.exports = TV;
