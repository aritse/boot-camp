const originalArray = [1, 3, 2, 5, 10];
const doubledArray = originalArray.map(n => n * 2);
const tripledArray = originalArray.map(n => n * 3);
const oddOrEven = originalArray.map(n => (n % 2 ? "odd" : "even"));

console.log("originalArray: ", originalArray);
console.log("doubledArray: ", doubledArray);
console.log("tripledArray: ", tripledArray);
console.log("oddOrEven: ", oddOrEven);

// Complete the following

// 1. A map that triples the originalArray and sets the result equal to a new `tripledArray` array

// 2. A map that takes the originalArray and returns a new array `oddOrEven`
// containing the text "even" if the number is even and the text "odd" if the number is odd
// i.e. using this map, the array [3, 1, 2, 4] should give us back ["odd", "odd", "even", "even"]

// Your code here

// Bonus: Use arrow functions as callbacks!
