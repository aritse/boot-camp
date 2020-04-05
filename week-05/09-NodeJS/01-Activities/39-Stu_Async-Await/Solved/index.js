const fs = require("fs");

const readFilePromise = (path, encode) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encode, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const writeFilePromise = (path, data, encode) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, encode, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

async function combineAnimals() {
  try {
    const pets = [];
    const files = ["cat.json", "dog.json", "goldfish.json", "hamster.json"];
    for (const file of files) {
      const pet = await readFilePromise(file, "utf8");
      pets.push(JSON.parse(pet));
    }

    const sorted = pets.sort((a, b) => a.age - b.age);

    await writeFilePromise("pets.json", JSON.stringify(sorted, null, 2), "utf8");
    console.log("successfully wrote to pets.json file");
  } catch (error) {
    console.log(error);
  }
}

combineAnimals();
