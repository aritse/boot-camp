module.exports = {
  pie: "pie",
  predictable: "predictable"
};

// Avoid using arrow functions for object methods
var dog = {
  name: "Lassie",
  sound: "Woof!",
  // makeSound: () => console.log("this: ", this, "\nmodule exports:", module.exports),
  makeSound: () => console.log(this.sound),
  readTag: () => console.log("The dog's tag reads: " + this.name + ".")
};

// Prints `undefined`
dog.makeSound();

// Prints `The dog's tag reads: undefined.`
dog.readTag();

// In the makeSound and readTag methods, `this` doesn't refer to `dog`
// If this code run in node, `this` refers to `module.exports` (the object containing all the exports in this file) => This is actually not true.
// If this code was run in the browser, `this` would refer to the window
// Using a fat arrow function breaks the meaning of 'this' when used in an key-value object
