const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const Character = sequelize.define("character", {
  routeName: Sequelize.STRING,
  name: Sequelize.STRING,
  role: Sequelize.STRING,
  age: Sequelize.NUMBER,
  forcePoints: Sequelize.NUMBER
});

Character.sync();

module.exports = Character;
