const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) throw err;
  const animalJSON = JSON.parse(data);

  const dogs = animalJSON.filter(pet => pet.species == "dog");
  const cats = animalJSON.filter(pet => pet.species == "cat");

  fs.writeFile("dogs.json", JSON.stringify(dogs, null, 2), err => {
    if (err) throw err;
    console.log("created dogs.json");
  });
  fs.writeFile("cats.json", JSON.stringify(cats, null, 2), err => {
    if (err) throw err;
    console.log("created cats.json");
  });
});
