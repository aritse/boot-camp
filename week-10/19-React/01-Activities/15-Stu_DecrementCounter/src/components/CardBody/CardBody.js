import React from "react";

export default function CardBody({ count, decr, incr }) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {count}</p>
      <button className="btn btn-primary" onClick={incr}>
        Increment
      </button>
      <button className="btn btn-secondary" onClick={decr}>
        Decrement
      </button>
    </div>
  );
}
