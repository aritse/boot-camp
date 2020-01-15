const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;

// Set handlebars as the default templating engine
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
const iceCreams = [
  { name: "vanilla", price: 10, awesomeness: 3 },
  { name: "chocolate", price: 4, awesomeness: 8 },
  { name: "banana", price: 1, awesomeness: 1 },
  { name: "greentea", price: 5, awesomeness: 7 },
  { name: "jawbreakers", price: 6, awesomeness: 2 },
  { name: "pistachio", price: 11, awesomeness: 15 }
];

// Routes
app.get("/icecreams", (req, res) => res.render("all-icecreams", { brand: "Ben and Jerry", icecreams: iceCreams }));
app.get("/icecream/:name", (req, res) => {
  let object;
  iceCreams.forEach(iceCream => {
    if (iceCream.name === req.params.name) object = iceCream;
  });
  res.render("single", object);
});

app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));
