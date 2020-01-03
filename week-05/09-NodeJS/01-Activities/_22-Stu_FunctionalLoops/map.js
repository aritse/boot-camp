const originalArray = [1, 3, 2, 5, 10];
const doubledArray = originalArray.map(n => n * 2);
const tripledArray = originalArray.map(n => n * 3);
const oddOrEven = originalArray.map(n => (n % 2 ? "odd" : "even"));

console.log("originalArray: ", originalArray);
console.log("doubledArray: ", doubledArray);
console.log("tripledArray: ", tripledArray);
console.log("oddOrEven: ", oddOrEven);
