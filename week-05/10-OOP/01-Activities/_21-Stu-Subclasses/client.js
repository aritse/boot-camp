const Car = require("./car");
const Boat = require("./boat");

const car = new Car(1, 4, "honk", "blue", 4);

const crew = ["John", "Captain", "Lisa"];
const boat = new Boat(2, "bonk", crew);

car.printInfo();
boat.printInfo();

car.useHorn();
boat.useHorn();

car.checkPassengers();
boat.crewSoundOff();
