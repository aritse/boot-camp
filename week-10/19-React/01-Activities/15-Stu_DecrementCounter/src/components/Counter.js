import React from "react";
import CardBody from "./CardBody/CardBody";

class Counter extends React.Component {
  state = { count: 0 };

  handleIncrement = () => this.setState({ count: this.state.count + 1 });
  handleDecrement = () => this.setState({ count: Math.max(this.state.count - 1, 0) });

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">Click Counter!</div>
        <CardBody count={this.state.count} incr={this.handleIncrement} decr={this.handleDecrement} />
      </div>
    );
  }
}

export default Counter;
