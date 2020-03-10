function Hero(name, profession, age, strength, hitPoints) {
  this.name = name;
  this.profession = profession;
  this.age = age;
  this.strength = strength;
  this.hitPoints = hitPoints;
  this.printStats = function() {
    console.log([this.name, this.profession, this.age, this.strength, this.hitPoints].join(" : "));
  };
}

Hero.prototype.isAlive = function() {
  console.log(this.name, "is", this.hitPoints > 0 ? "alive" : "dead");
};

Hero.prototype.attack = function(char) {
  console.log(this.name, "is attacking", char.name);
  char.hitPoints = Math.max(0, char.hitPoints - this.strength);
};

Hero.prototype.levelUp = function() {
  console.log(this.name, "is leveling up...");
  this.age++;
  this.strength += 5;
  this.hitPoints += 25;
};

const superman = new Hero("Super Woman", "Lawyer", 25, 20, 100);
const batman = new Hero("Bat Man", "Doctor", 30, 30, 100);

superman.printStats();
batman.printStats();

superman.isAlive();
batman.isAlive();

superman.attack(batman);
superman.attack(batman);
superman.attack(batman);
superman.attack(batman);
superman.attack(batman);
superman.attack(batman);

superman.printStats();
batman.printStats();

batman.isAlive();
batman.levelUp();
superman.printStats();
batman.printStats();
