const maths = require("./maths.js");

const operation = process.argv[2];
const a = parseFloat(process.argv[3]);
const b = parseFloat(process.argv[4]);

switch (operation) {
  case "sum":
  case "+":
    console.log(maths.sum(a, b));
    break;
  case "difference":
  case "-":
    console.log(maths.difference(a, b));
    break;
  case "product":
  case "*":
  case "x":
    console.log(maths.product(a, b));
    break;
  case "quotient":
  case "/":
    console.log(maths.quotient(a, b));
    break;
  default:
    console.log("Syntax: node index.js [sum | difference | product | quotient] <num1> <num2>");
}
