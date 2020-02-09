import React from "react";

function JSXVariables() {
  const name = "Ariuntulga Tserendavaa";
  const vowels = ["a", "e", "i", "o", "u", "y"];
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}.</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React {`is fun.`}</h2>
          <h2>My name without any vowels is: {name.split("").filter(c => !vowels.includes(c))}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;