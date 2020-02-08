import React from "react";

function HelloBootstrap() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Hello, world!</h1>
        <p>I'm a jumbotron!</p>
        <button className="btn btn-primary btn-sm">Learn more</button>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card content</p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card content</p>
        </div>
      </div>
    </div>
  );
}

export default HelloBootstrap;
