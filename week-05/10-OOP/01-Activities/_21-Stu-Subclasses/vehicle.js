class Vehicle {
  constructor(id, wheels, sound) {
    this.id = id;
    this.wheels = wheels;
    this.sound = sound;
  }

  printInfo() {
    console.log(`Vehicle ${this.id} has ${this.wheels} wheels`);
  }

  useHorn() {
    console.log(this.sound);
  }
}

module.exports = Vehicle;
