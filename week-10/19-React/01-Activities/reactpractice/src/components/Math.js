import React from "react";

function Math(props) {
  let ans;
  const a = Number(props.num1);
  const b = Number(props.num2);
  switch (props.operator) {
    case "+":
      ans = a + b;
      break;
    case "-":
      ans = a - b;
      break;
    case "*":
      ans = a * b;
      break;
    case "/":
      ans = a / b;
      break;
    case "%":
      ans = a % b;
      break;
    default:
      ans = "invalid operator";
      break;
  }
  return <span style={{ fontSize: ans }}>{ans}</span>;
}

export default Math;
