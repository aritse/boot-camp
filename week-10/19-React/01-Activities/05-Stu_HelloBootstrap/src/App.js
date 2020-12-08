import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Jumbotron></Jumbotron>
      <Card></Card>
    </div>
  );
}