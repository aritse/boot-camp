const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    let animals = [];
    let animal = await readFileAsync("cat.json");
    animals.push(JSON.parse(animal));
    animal = await readFileAsync("dog.json");
    animals.push(JSON.parse(animal));
    animal = await readFileAsync("hamster.json");
    animals.push(JSON.parse(animal));
    animal = await readFileAsync("goldfish.json");
    animals.push(JSON.parse(animal));

    writeFileAsync("combined.json", JSON.stringify(animals, null, 2));
  } catch (err) {
    console.log(err);
  }
}

combineAnimals();
