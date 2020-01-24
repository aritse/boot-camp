// offers a set of routes for displaying and saving data to the db

const Book = require("../models/book");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    Book.findAll({}).then(data => res.json(data));
  });

  app.get("/api/:book", function(req, res) {
    Book.findAll({
      where: { title: req.params.book }
    }).then(data => res.json(data));
  });

  app.get("/api/genre/:genre", function(req, res) {
    Book.findAll({
      where: {
        genre: req.params.genre
      }
    }).then(data => res.json(data));
  });

  app.get("/api/author/:author", async function(req, res) {
    try {
      const data = await Book.findAll({
        where: {
          author: req.params.author
        }
      });
    } catch (error) {
      throw error;
    }
  });

  app.get("/api/books/long", function(req, res) {
    Book.findAll({
      where: {
        pages: {
          $gte: 150
        }
      }
    }).then(data => res.json(data));
  });

  app.get("/api/books/short", function(req, res) {
    Book.findAll({
      where: {
        pages: {
          $lte: 150
        }
      }
    }).then(data => res.json(data));
  });

  app.post("/api/new", (req, res) => {
    Book.create(req.body).then(data => res.json(data));
  });

  app.delete("/api/book/:id", (req, res) => {
    Book.destroy({
      where: {
        id: req.params.id
      }
    }).then(data => res.json(data));
  });
};
