function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = () => {
    if (this.raining) {
      console.log(this.noise);
    }
  };
}

let dog = new Animal(true, "Woof!");
let cat = new Animal(true, "Meow!");

dog.makeNoise();
cat.makeNoise();
massHysteria(dog, cat);

function massHysteria(dog, cat) {
  if (dog.raining && cat.raining) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
}
