// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function () {
    if (this.raining) console.log(this.noise);
  };
}

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
const dogs = new Animal(true, "Woof!");
const cats = new Animal(false, "Meow!");

// Calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// If we want, we can change object's properties after they're created
cats.raining = true;
cats.makeNoise();

const massHysteria = (dogs, cats) => {
  if (dogs.raining && cats.raining) console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
};

massHysteria(dogs, cats);
