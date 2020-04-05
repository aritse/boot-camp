const weather = require("weather-js");

function UserSearch(name, location) {
  this.name = name;
  this.location = location;
  this.date = Date.now();

  this.getWeather = function () {
    weather.find({ search: this.location, degreeType: "F" }, (err, res) => {
      if (err) throw err;
      console.log(JSON.stringify(res, null, 2));
    });
  };
}

module.exports = UserSearch;
