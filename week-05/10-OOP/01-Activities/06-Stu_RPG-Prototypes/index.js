function Hero(name, profession, age, strength, hitPoints) {
  this.name = name;
  this.profession = profession;
  this.age = age;
  this.strength = strength;
  this.hitPoints = hitPoints;
  this.printStats = function () {
    console.log(`${this.name} => Profession: ${this.profession}, Age: ${age}, Strength: ${this.strength}, Hitpoint: ${this.hitPoints}`);
  };
}

Hero.prototype.isAlive = function () {
  return this.hitPoints > 0 ? true : false;
};

Hero.prototype.attack = function (char) {
  console.log(this.name, "is attacking", char.name);
  char.hitPoints = Math.max(0, char.hitPoints - this.strength);
};

Hero.prototype.levelUp = function () {
  console.log(this.name, "is leveling up...");
  this.age--;
  this.strength += 5;
  this.hitPoints = 500;
};

console.log("Spawning fighters ...");

const red = new Hero("Hulk", "Doctor", 30, 30, 500);
const blue = new Hero("Batman", "Lawyer", 30, 30, 500);

red.printStats();
blue.printStats();

for (let i = 0; i < 3; i++) {
  while (blue.isAlive() && red.isAlive()) {
    Math.floor(Math.random() * 10) % 2 === 0 ? red.attack(blue) : blue.attack(red);
  }

  red.printStats();
  blue.printStats();

  if (red.isAlive()) {
    console.log(blue.name, "is dead.");
    blue.levelUp();
  } else {
    console.log(red.name, "is dead.");
    red.levelUp();
  }
}
