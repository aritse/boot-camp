// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/api/all", (req, res) => {
    connection.query("SELECT * FROM chirp", (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  // Add a chirp
  app.post("/api/new", (req, res) => {
    connection.query("INSERT INTO chirp (author, body, created_at) VALUES (?, ?, ?)", [req.body.author, req.body.body, req.body.created_at], (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });
};
