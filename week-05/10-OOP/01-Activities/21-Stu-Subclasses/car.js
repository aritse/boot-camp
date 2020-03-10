const Vehicle = require("./vehicle");

class Car extends Vehicle {
  constructor(id, wheels = 4, sound = "Beep", color, passengers) {
    super(id, wheels, sound);
    this.color = color;
    this.passengers = passengers;
  }

  checkPassengers() {
    this.passengers > 4 ? console.log("Too many passengers") : console.log("Enough space");
  }
}

module.exports = Car;
