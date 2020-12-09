export default function Math(props) {
  const [x, y]= [Number(props.x), Number(props.y)];
  let ans;

  switch (props.operator) {
    case "+":
      ans = x + y;
      break;
    case "-":
      ans = x - y;
      break;
    case "*":
      ans = x * y;
      break;
    case "%":
      ans = x % y;
      break;
    default:
      ans = "invlid";
      break;
  }
  return <span style={{fontSize: ans}}>{ans}</span>
}