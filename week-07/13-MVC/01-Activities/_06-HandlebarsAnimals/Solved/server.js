var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
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

app.get("/all-pets", function(req, res) {
  const pets = animals.filter(a => a.pet);
  res.render("index", { animals: pets });
});

app.get("/all-non-pets", function(req, res) {
  const nonPets = animals.filter(a => !a.pet);
  res.render("index", { animals: nonPets });
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
