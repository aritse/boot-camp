const Vehicle = require("./vehicle");

class Boat extends Vehicle {
  constructor(id, sound = "Dood", crew) {
    super(id, 0, sound);
    this.crew = crew;
  }

  crewSoundOff() {
    this.crew.forEach(member => {
      console.log(member);
    });
  }
}

module.exports = Boat;
