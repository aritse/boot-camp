// require the sequelize library
const Sequelize = require("sequelize");

// require the connection to the database
const sequelize = require("../config/connection");

// Create a "Book" model with the following configuration
const Book = sequelize.define("books", {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  genre: Sequelize.STRING,
  pages: Sequelize.INTEGER
});

Book.sync();
module.exports = Book;
