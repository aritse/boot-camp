import {useState} from "react";
import CardBody from "./CardBody";

export default function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(Math.max(count - 1, 0));

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter</div>
      <CardBody count={count} incrementCount={incrementCount} decrementCount={decrementCount}/>
    </div>
  );
}