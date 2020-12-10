import {useState} from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const onClickHandler = () => setCount(count + 1);

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter</div>
      <div classname="card-body">
        <p className="card-text">Count: {count}</p>
        <button className="btn btn-primary" onClick={onClickHandler}>Increment</button>
      </div>
    </div>
  );
}