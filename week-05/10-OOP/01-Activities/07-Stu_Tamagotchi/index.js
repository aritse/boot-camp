function DigitalPal() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.outside = false;
  this.houseCondition = 100;
}

DigitalPal.prototype.feed = function() {
  if (this.hungry) {
    console.log("That was yummy!");
    this.hungry = false;
    this.sleepy = true;
  } else {
    console.log("No thanks! I am full.");
  }
};

DigitalPal.prototype.sleep = function() {
  if (this.sleepy) {
    console.log("Zzzzzzzzz");
    this.sleepy = false;
    this.bored = true;
    this.increaseAge();
  } else {
    console.log("No way! I am not tired.");
  }
};

DigitalPal.prototype.play = function() {
  if (this.bored) {
    console.log("Yay! Let's play!");
    this.bored = false;
    this.hungry = true;
  } else {
    console.log("Not right now. Later?");
  }
};

DigitalPal.prototype.increaseAge = function() {
  this.age++;
  console.log(`Happy Birthday to me! I am ${this} years old`);
};

DigitalPal.prototype.bark = function() {
  console.log("Woof! Woof!");
};

DigitalPal.prototype.goOutside = function() {
  if (this.outside) {
    console.log("We are already outside though...");
  } else {
    console.log("Yay! I love the outdoor!");
    this.outside = true;
    this.bark();
  }
};

DigitalPal.prototype.goInside = function() {
  if (this.outside) {
    console.log("Do we have to? Fine...");
    this.outside = false;
  } else {
    console.log("I am already inside...");
  }
};

DigitalPal.prototype.meow = function() {
  console.log("Meow! Meow!");
};

DigitalPal.prototype.destroyFurniture = function() {
  if (this.houseCondition - 10 > 0) {
    this.houseCondition -= 10;
    console.log("Muahahahaha! Take that furniture!");
    this.bored = false;
    this.sleepy = true;
  } else {
    console.log("I've already destroyed it all!");
  }
};

DigitalPal.prototype.buyNewFurniture = function() {
  this.houseCondition += 50;
  console.log("Are you sure about that?");
};

const dog = new DigitalPal();
const cat = new DigitalPal();

dog.goInside();
cat.bark();
