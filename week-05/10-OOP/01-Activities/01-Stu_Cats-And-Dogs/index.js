let dog = {
  raining: true,
  noise: "Woof!",
  makeNoise: function() {
    if (this.raining) {
      console.log(this.noise);
    }
  }
};

let cat = {
  raining: true,
  noise: "Meow!",
  makeNoise: function() {
    if (this.raining) {
      console.log(this.noise);
    }
  }
};

dog.makeNoise();
cat.makeNoise();
massHysteria(dog, cat);

function massHysteria(dog, cat) {
  if (dog.raining && cat.raining) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
}
