import React from "react";
import "../styles/Navbar.css";

const style = {
  background: "green",
  justifyContent: "flex-end"
};

function Navbar() {
  return (
    <nav className="navbar" style={style}>
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
