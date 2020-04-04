const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/:operator/:operand1/:operand2", (req, res) => {
  let result;
  let { operator, operand1, operand2 } = req.params;
  operand1 = parseInt(operand1);
  operand2 = parseInt(operand2);

  switch (operator) {
    case "add":
    case "+":
      result = operand1 + operand2;
      break;
    case "subtract":
    case "-":
      result = operand1 - operand2;
      break;
    case "multiply":
    case "*":
      result = operand1 * operand2;
      break;
    case "divide":
    case ":":
      result = operand1 / operand2;
      break;
    default:
      result = "Invalid operator! Please enter one of ['add', '+', 'subtract', '-', 'multiply', '*', 'divide', ':']";
  }

  res.send(result.toString());
});

app.listen(PORT, () => console.log("listening on: http://localhost:" + PORT));
