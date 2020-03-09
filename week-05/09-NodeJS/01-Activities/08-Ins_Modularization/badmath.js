const pie = "apple";
const predictable = () => 1;

// module.exports is a global object used to store anything such as
// variables or methods etc. This object is then accessed in another scope.
console.log("Inside badmath.js file");
console.log(" Before:", module.exports);

module.exports = {
  pie: pie,
  predictable: predictable
};

console.log(" After:", module.exports);
