const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;

const User = require("./userModel.js.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

app.post("/submit", (req, res) => {
  User.create(req.body)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.json(err));
});

app.listen(port, () => console.log(`express app listening on ${port}`));
