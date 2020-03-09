const fs = require("fs");

fs.readFile("animals.json", "utf8", (error, data) => {
  if (error) throw error;
  const pets = JSON.parse(data); // create an object
  const dogs = pets.filter(pet => pet.species === "dog");
  const cats = pets.filter(pet => pet.species === "cat");

  fs.writeFile("dogs.json", JSON.stringify(dogs, null, 2), error => {
    if (error) throw error;
    console.log("created dogs.json");
  });
  fs.writeFile("cats.json", JSON.stringify(cats, null, 2), error => {
    if (error) throw error;
    console.log("created cats.json");
  });
});

console.log("Creating cats and dogs file ...");
