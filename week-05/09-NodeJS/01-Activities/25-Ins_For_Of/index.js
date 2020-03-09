// 1. Using arrays
const songs = ["Bad Guy", "Old Town Road", "7 Rings"];

for (const value of songs) console.log(value);

// 2. Using map
const rank = new Map([
  ["Bad Guy", 1],
  ["Old Town Road", 2]
]);
console.log(rank);

for (const [key, value] of rank) console.log(`${key}'s chart position is ${value}`);
// Bad Guy's chart position is 1
// Old Town Road's chart position is 2

// In Object, the key must be integer or string. Whereas in Map, the key-field can be of any data-type (integer, an array, even an object!)
// In the Map, the original order of elements is preserved. This is not true in case of objects. The Map is an instance of an object but the vice-versa is not true.
