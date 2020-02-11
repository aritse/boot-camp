import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer(props) {
  return (
    <div className="jumbotron card-container">
      <Card login={props.login} language={props.language} image={props.image} handleBtnClick={props.handleBtnClick} />
    </div>
  );
}

export default CardContainer;
