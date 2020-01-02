const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    let animal;
    let animals = [];

    animal = await readFileAsync("cat.json");
    animal = JSON.parse(animal);
    animals.push(animal);

    animal = await readFileAsync("dog.json");
    animal = JSON.parse(animal);
    animals.push(animal);

    animal = await readFileAsync("hamster.json");
    animal = JSON.parse(animal);
    animals.push(animal);

    animal = await readFileAsync("goldfish.json");
    animal = JSON.parse(animal);
    animals.push(animal);

    writeFileAsync("combined.json", JSON.stringify(animals, null, 2));
  } catch (err) {
    console.log(err);
  }
}

combineAnimals();
