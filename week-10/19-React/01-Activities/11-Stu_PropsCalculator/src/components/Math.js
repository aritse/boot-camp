export default function Math({ a, op, b }) {
  const [x, y] = [Number(a), Number(b)];
  let ans;
  switch (op) {
    case '+':
      ans = x + y;
      break;
    case '-':
      ans = x - y;
     break;
    case '*':
      ans = x * y;
      break;
    case '%':
      ans = x % y;
      break;
    default:
      ans = 'invalid';
      break;
  }

  return (
    <span style={{ fontSize: ans }}>{ans}</span>
  )
}