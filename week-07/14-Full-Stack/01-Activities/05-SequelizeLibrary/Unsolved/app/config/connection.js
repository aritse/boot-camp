const Sequelize = require("sequelize");

// create mySQL connection using Sequelize
const sequelize = new Sequelize("sequelize_library", "root", "password", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
