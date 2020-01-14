const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/:operator/:first/:second", (req, res) => {
  let result;
  let { operator, first, second } = req.params;
  first = parseInt(first);
  second = parseInt(second);
  console.log(operator, first, second);

  switch (operator) {
    case "add":
    case "+":
      result = first + second;
      break;
    case "subtract":
    case "-":
      result = first - second;
      break;
    case "multiply":
    case "*":
      result = first * second;
      break;
    case "divide":
      result = first / second;
      break;
    default:
      result = "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  res.json(result);
});

app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));
