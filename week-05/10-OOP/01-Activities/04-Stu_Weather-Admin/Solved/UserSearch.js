const weather = require("weather-js");

const UserSearch = function(name, location) {
  this.name = name;
  this.location = location;
  this.date = Date.now();

  this.getWeather = function() {
    weather.find({ search: this.location, degreeType: "F" }, (err, result) => {
      if (err) throw err;
      console.log(JSON.stringify(result, null, 2));
    });
  };
};

module.exports = UserSearch;
