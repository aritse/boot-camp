// 1.
const myArray = [2, 4, 6, 8];
// console.log(myArray);
// myArray.forEach(n => console.log(n));
// myArray.map(x => console.log(x * 2));

// 2.
myObject = {
  name: "Eric",
  age: 28,
  occupation: "Curriculum Dev"
};
// console.log(myObject);
// console.log("Hello");
// console.log("Hello".toLowerCase());

// console.log(1337);
// console.log((1337).toString());

// 3.
function Movie(title, releaseYear) {
  this.title = title;
  this.releaseYear = releaseYear;
  //   this.logInfo = function() {
  //     console.log(`${this.title} was released in ${this.releaseYear}`);
  //   };
}

// prototype is a property of the class definition. That means prototype is a static property. You access prototype via class name instead
// of an object instance. As class' static property, it has access to instance variables. The moral of the story is that you can define
// static functions that are shared between object instances. That's why, all arrays have forEach(), map(), reduce(), and filter() methods.
Movie.prototype.logInfo = function() {
  console.log(`${this.title} was released in ${this.releaseYear}`);
};

const theShining = new Movie("The Shining", 1980);
theShining.logInfo();
console.log("object has title:", theShining.hasOwnProperty("title")); //true
console.log("object has releaseYear:", theShining.hasOwnProperty("releaseYear")); //true
console.log("object has log info():", theShining.hasOwnProperty("logInfo")); //false
console.log("class has prototype:", Movie.hasOwnProperty("prototype")); //true
console.log("prototype of class has logInfo:", Movie.prototype.hasOwnProperty("logInfo")); //true
