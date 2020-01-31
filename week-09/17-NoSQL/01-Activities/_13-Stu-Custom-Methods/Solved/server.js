<<<<<<< HEAD
// Add code to userModel.js to complete the model

=======
>>>>>>> upstream/master
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const User = require("./userModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true });

<<<<<<< HEAD
// Routes

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", ({ body }, res) => {
  // Create a new user using req.body
  const user = new User(body);

  // Update this route to run the `setFullName` and `lastUpdatedDate` methods before creating a new User
  // You must create these methods in the model.
=======
app.post("/submit", ({body}, res) => {
  const user = new User(body);
>>>>>>> upstream/master
  user.setFullName();
  user.lastUpdatedDate();

  User.create(user)
    .then(dbUser => {
<<<<<<< HEAD
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(err => {
      // If an error occurs, send the error to the client
=======
      res.json(dbUser);
    })
    .catch(err => {
>>>>>>> upstream/master
      res.json(err);
    });
});

<<<<<<< HEAD
// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
=======
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
>>>>>>> upstream/master
