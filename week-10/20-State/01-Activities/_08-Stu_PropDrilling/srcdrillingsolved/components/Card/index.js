import React from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";

function Card(props) {
  return (
    <div>
      <CardHeading title={props.title}/>
      <CardImg  image={props.image}/>
      <CardBody language={props.language} title={props.title}/>
      <CardBtn clickMe={props.handleBtnClick} style={{ opacity: props.image ? 1 : 0 }} data-value="back" />
      <CardBtn clickMe={props.handleBtnClick} style={{ opacity: props.image ? 1 : 0 }} data-value="next" />
    </div>
  );
}

export default Card;
