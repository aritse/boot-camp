// Your assignment is to define the routes below. Good luck!

const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "warmup";
const collections = ["books"];

const db = mongojs(databaseUrl, collections);
db.on("error", error => {
  console.log("Database Error:", error);
});

// Routes
// ======

// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

app.post("/submit", (req, res) => {
  req.body.read = false;
  db.books.insert(req.body, (err, data) => {
    res.json(data);
  });
});

// Find all books marked as read
app.get("/read", (req, res) => {
  db.books.find({ read: true }, (err, data) => {
    res.json(data);
  });
});

// Find all books marked as unread
app.get("/unread", (req, res) => {
  db.books.find({ read: false }, (err, data) => {
    res.json(data);
  });
});

// Mark a book as having been read
app.put("/markread/:id", (req, res) => {
  db.books.update({ _id: mongojs.ObjectID(req.params.id) }, { $set: { read: true } }, (err, data) => {
    res.json(data);
  });
});

// Mark a book as having been not read
app.put("/markunread/:id", (req, res) => {
  db.books.update({ _id: mongojs.ObjectID(req.params.id) }, { $set: { read: false } }, (err, data) => {
    res.json(data);
  });
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
