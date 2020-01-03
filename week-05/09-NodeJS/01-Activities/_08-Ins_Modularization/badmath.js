const pie = "apple";
const predictable = () => 1;

// module.exports is an object we use to store variables or methods
console.log("Before:", module.exports);

module.exports = {
  pie: pie,
  predictable: predictable
};

console.log("After:", module.exports);
