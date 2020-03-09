// require function basically brings in module.exports
// that is defined in badmath.js file
console.log("Inside index.js file");
const badmath = require("./badmath.js");
console.log("Badmath:", badmath);

console.log(badmath.pie);
console.log(badmath.predictable());
