// Depending on the environment `setTimeout` is called in, it may refer to one of two objects
// In the browser, `setTimeout` is a property of the `window` object
// In node, it is a function that belongs to a special "Timeout" object
console.log("In Node environment, setTimeout is:", setTimeout);

let person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking 111...");
    // this refers to the person object because saySomething function was DEFINED in the person object
    console.log("In first object, this refers to:", this);

    setTimeout(function() {
      // this keyword refers to the object in which the current execution scope is DEFINED. The current execution is setTimeout() which is
      // DEFINED in Timeout object. Therefore, this keyword refers to Timeout object which will be printed below.
      console.log("this keyword in the first object refers to:\n", this);
      // Because the Timeout object doesn't have a 'name' property, console prints 'undefined'.
      console.log(this.name + "!");
    }, 200);
  }
};

console.log("Welcome to This Keyword");
person.saySomething();
// prints "Hodor is thinking..."
// prints "undefined!" 100ms later

person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking 222...");
    // this refers to the person object because saySomething function was DEFINED in the person object
    console.log("In the second object, this refers to:", this);

    // i.e. whatever `this` is where it's created
    // Arrow function on the other hand redefines (rebinds / redirects) the `this` keyword so that it refers to the the object in which the current
    // scope is CALLED. The current execution is setTimeout() which is CALLED in person object.
    setTimeout(() => console.log(this.name + "!"), 100);
  }
};

person.saySomething(); // "Prints Hodor is thinking..."
// prints `Hodor!` 100ms later
