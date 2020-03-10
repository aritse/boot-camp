const WeatherAdmin = require("./WeatherAdmin");

// Hold the value whether someone is an "admin" or "user"
const loginType = process.argv[2];

// If they are a user... they will also need to provide a "name"
const userName = process.argv[3];

// And they will need to provide a "location"
const userLocation = process.argv[4];

// Create an instance of the WeatherAdmin
const myAdmin = new WeatherAdmin();

if (loginType === "admin") myAdmin.getData();
else myAdmin.newUserSearch(userName, userLocation);
