var db = require("../models");

module.exports = function(app) {
  app.get("/api/posts", function(req, res) {
    db.post.findAll().then(data => res.json(data));
  });

  app.get("/api/posts/category/:category", function(req, res) {
    db.post.findAll({ category: req.params.category }).then(data => res.json(data));
  });

  app.get("/api/posts/:id", function(req, res) {
    db.post.findOne({ id: req.params.id }).then(data => res.json(data));
  });

  app.post("/api/posts", function(req, res) {
    db.post.create(req.body).then(data => res.json(data));
  });

  app.delete("/api/posts/:id", function(req, res) {
    db.post.destroy({ where: { id: req.params.id } }).then(data => res.json(data));
  });

  app.put("/api/posts", function(req, res) {
    db.post.update(req.body, { where: { id: req.body.id } }).then(data => res.json(data));
  });
};
