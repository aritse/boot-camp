const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  },
  {
    animalType: "cat",
    pet: true,
    fierceness: 10
  },
  {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  },
  {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  },
  {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", function(req, res) {
  res.render("dog", animals[0]);
});

app.get("/all-home", function(req, res) {
  const pets = animals.filter(a => a.pet);
  res.render("index", { animals: pets });
});

app.get("/all-wild", function(req, res) {
  const wild = animals.filter(a => !a.pet);
  res.render("index", { animals: wild });
});

app.listen(PORT, () => console.log("Server listening on: http://localhost: " + PORT));
