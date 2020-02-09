const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const db = mongojs("notetaker", ["notes"]);
db.on("error", error => console.log("Database Error:", error));

app.get("/", (req, res) => res.send(index.html));

// 1. Save a note to the database's collection
app.post("/submit", (req, res) => {
  db.notes.insert(req.body, (err, data) => res.json(data));
});

// 2. Retrieve all notes from the database's collection
app.get("/all", (req, res) => {
  db.notes.find({}, (err, data) => res.json(data));
});

// 3. Retrieve one note in the database's collection by it's ObjectId
app.get("/find/:id", (req, res) => {
  const id = mongojs.ObjectID(req.params.id);
  db.notes.findOne({ _id: id }, (err, data) => res.json(data));
});

// 4. Update one note in the database's collection by it's ObjectId
app.post("/update/:id", (req, res) => {
  const id = mongojs.ObjectID(req.params.id);
  db.notes.update({ _id: id }, { $set: req.body }, (err, data) => res.json(data));
});

// 5. Delete one note from the database's collection by it's ObjectId
app.delete("/delete/:id", (req, res) => {
  const id = mongojs.ObjectID(req.params.id);
  db.notes.remove({ _id: id }, (err, data) => res.json(data));
});

// 6. Clear the entire note collection
app.delete("/clearall", (req, res) => {
  db.notes.remove({}, (err, data) => res.json(data));
});

// Listen on port 3000
app.listen(3000, () => console.log("App running on port 3000!"));
