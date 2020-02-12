import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer(props) {
  return (
    <div className="jumbotron card-container">
      <Card handleBtnClick={props.handleClick} title={props.title} image={props.image} language={props.language}/>
    </div>
  );
}

export default CardContainer;
