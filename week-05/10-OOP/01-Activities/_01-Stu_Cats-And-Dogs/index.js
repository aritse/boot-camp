function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
}

Animal.prototype.makeNoise = () => console.log(this.raining ? this.noise : "not raining");
const [dog, cat] = [new Animal(true, "Woof!"), new Animal(true, "Meow!")];

dog.makeNoise();
cat.makeNoise();

const massHysteria = (dog, cat) => {
  if (dog.raining && cat.raining) console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
};

massHysteria(dog, cat);
