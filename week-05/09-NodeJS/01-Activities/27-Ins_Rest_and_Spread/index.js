// 1. rest

// without rest
const addWithoutRest = (x, y) => x + y;
console.log(addWithoutRest(1, 2, 3, 4, 5)); // 3

// with rest
// function add(...nums) {
//   return nums.reduce((sum, n) => (sum += n), 0);
// }

// One liner
const add = (...nums) => nums.reduce((sum, n) => (sum += n), 0);

console.log(add(1)); // 1
console.log(add(3, 3)); // 6
console.log(add(1, 1, 4, 5)); // 11

// 2.
// function howManyArgs(...args) {
//   return `You passed ${args.length} arguments.`;
// }

// const howManyArgs = function(...args) {
//   return `You passed ${args.length} arguments.`;
// };

// One liner
const howManyArgs = (...args) => `You passed ${args.length} arguments.`;

console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.

// 1. spread
const dragons = ["Drogon", "Viserion", "Rhaegal"];
const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons
console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]
