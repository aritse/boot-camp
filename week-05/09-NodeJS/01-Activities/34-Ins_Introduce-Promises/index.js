const fs = require("fs");
const util = require("util");

// The built-in util package can be used to create Promise-based versions of functions using node style callbacks
// They are still async functions meaning no blocking of execution. Only promise based so that then() can be used.
const readFileAsyncPromise = util.promisify(fs.readFile);
const writeFileAsyncPromise = util.promisify(fs.writeFile);

readFileAsyncPromise("animals.json", "utf8").then((data) => {
  // Parse the JSON string to an object
  const pets = JSON.parse(data);
  const [dogs, cats] = [[], []];

  pets.forEach((pet) => (pet.species === "dog" ? dogs.push(pet) : cats.push(pet)));

  // Turn the arrays into JSON strings so they can be written to files
  const dogJSON = JSON.stringify(dogs, null, 2);
  const catJSON = JSON.stringify(cats, null, 2);

  writeFileAsyncPromise("dogs.json", dogJSON).then(() => console.log("Successfully wrote to dogs.json file"));
  writeFileAsyncPromise("cats.json", catJSON).then(() => console.log("Successfully wrote to cats.json file"));
});

console.log("It should print first");
