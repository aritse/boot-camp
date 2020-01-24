// This file offers routes for sending users to the constious html pages
const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/view.html")));
  app.get("/add", (req, res) => res.sendFile(path.join(__dirname, "../public/add.html")));
  app.get("/all", (req, res) => res.sendFile(path.join(__dirname, "../public/all.html")));
  app.get("/short", (req, res) => res.sendFile(path.join(__dirname, "../public/short.html")));
  app.get("/long", (req, res) => res.sendFile(path.join(__dirname, "../public/long.html")));
};
