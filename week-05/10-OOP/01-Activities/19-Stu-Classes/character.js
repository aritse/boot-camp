class Character {
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }

  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("-".repeat(50));
  }

  isAlive() {
    if (this.hitPoints > 0) {
      this.printStats();
      return true;
    } else {
      console.log(`${this.name} is dead!!!`);
      return false;
    }
  }

  attack(opponent) {
    console.log(`${opponent.name} was attacked and dealt ${this.strength} damage`);
    opponent.hitPoints -= this.strength;
  }
}

const hero = new Character("Hero", 20, 50);
const monster = new Character("Monster", 10, 200);

// Create an interval that alternates attacks every 2000 ms
let turn = 0;

const alternate = () => {
  if (turn) hero.isAlive() ? monster.attack(hero) : clearInterval(interval);
  else monster.isAlive() ? hero.attack(monster) : clearInterval(interval);

  turn = !turn;
};

const interval = setInterval(alternate, 1000);
