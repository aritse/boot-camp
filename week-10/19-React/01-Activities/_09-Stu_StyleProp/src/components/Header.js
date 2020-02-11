import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const style = {
  background: "red",
  fontSize: "100px"
};

function Header() {
  return (
    <header className="header" style={style}>
      <h1>Welcome</h1>
    </header>
  );
}

export default Header;
