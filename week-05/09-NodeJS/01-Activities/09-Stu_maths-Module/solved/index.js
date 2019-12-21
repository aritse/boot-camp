const maths = require("./maths");

const operation = process.argv[2];
const nums = process.argv.splice(3);
const a = parseInt(nums[0]);
const b = parseInt(nums[1]);
var result;

switch (operation) {
  case "sum":
    result = maths.sum(a, b);
    break;
  case "difference":
    result = maths.difference(a, b);
    break;
  case "product":
    result = maths.product(a, b);
    break;
  case "quotient":
    result = maths.quotient(a, b);
    break;
  default:
    throw "invalid operation";
}
console.log(result);
