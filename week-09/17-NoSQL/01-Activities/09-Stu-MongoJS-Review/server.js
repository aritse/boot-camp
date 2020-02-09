const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const database = "warmup";
const collections = ["books"];

const db = mongojs(database, collections);
db.on("error", error =>   console.log("Database Error:", error));

app.post("/submit", (req, res) => {
  req.body.read = false;
  db.books.insert(req.body, (err, data) =>     res.json(data));
});

// Find all books marked as read
app.get("/read", (req, res) => {
  db.books.find({ read: true }, (err, data) =>    res.json(data));
});

// Find all books marked as unread
app.get("/unread", (req, res) => {
  db.books.find({ read: false }, (err, data) =>  res.json(data));
});

// Mark a book as having been read
app.put("/markread/:id", (req, res) => {
  const id = mongojs.ObjectID(req.params.id);
  db.books.update({ _id: id }, { $set: { read: true } }, (err, data) =>   res.json(data));
});

// Mark a book as having been not read
app.put("/markunread/:id", (req, res) => {
  const id = mongojs.ObjectID(req.params.id);
  db.books.update({ _id: id }, { $set: { read: false } }, (err, data) =>  res.json(data));
});

// Listen on port 3000
app.listen(3000, () =>  console.log("App running on port 3000!"));
