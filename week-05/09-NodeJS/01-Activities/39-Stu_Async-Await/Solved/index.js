const fs = require("fs");

const readFileAsync = (path, encode) => {
  return new Promise((res, rej) => {
    fs.readFile(path, encode, (err, data) => {
      if (err) return rej(err);
      res(data);
    });
  });
};

const writeFileAsync = (path, data, encode) => {
  return new Promise((res, rej) => {
    fs.writeFile(path, data, encode, err => {
      if (err) return rej(err);
      res();
    });
  });
};

async function combineAnimals() {
  try {
    const pets = [];
    const files = ["cat.json", "dog.json", "goldfish.json", "hamster.json"];
    for (const file of files) {
      const pet = await readFileAsync(file, "utf8");
      pets.push(JSON.parse(pet));
    }

    const sorted = pets.sort((a, b) => a.age - b.age);

    await writeFileAsync("pets.json", JSON.stringify(sorted, null, 2), "utf8");
    console.log("successfully wrote to pets.json file");
  } catch (error) {
    console.log(error);
  }
}

combineAnimals();
