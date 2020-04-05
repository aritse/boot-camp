const fs = require("fs");
const moment = require("moment");
const UserSearch = require("./UserSearch");

function WeatherAdmin() {
  this.getData = function () {
    fs.readFile("log.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log(`${data || "No data"}`);
    });
  };

  this.newUserSearch = function (name, location) {
    const userSearch = new UserSearch(name, location);
    const logTxt = `\nName: ${name} Location: ${location} Date: ${moment(userSearch.date).format("MM-DD-YYYY")}`;

    fs.appendFile("log.txt", logTxt, "utf-8", (err) => {
      if (err) throw err;
    });

    userSearch.getWeather();
  };
}

module.exports = WeatherAdmin;
