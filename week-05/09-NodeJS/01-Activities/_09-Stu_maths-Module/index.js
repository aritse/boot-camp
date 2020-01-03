const maths = require("./maths");

const operation = process.argv[2];
const n1 = parseInt(process.argv[3]);
const n2 = parseInt(process.argv[4]);

switch (operation) {
  case "sum":
    console.log(maths.sum(n1, n2));
    break;
  case "difference":
    console.log(maths.difference(n1, n2));
    break;
  case "product":
    console.log(maths.product(n1, n2));
    break;
  case "quotient":
    console.log(maths.quotient(n1, n2));
    break;
  default:
    console.log("Syntax: node index.js [sum | difference | product | quotient] <num1> <num2>");
}
