import React from "react";
import CardTitleText from "../CardTitleText";
import "./style.css";

function CardTitle(props) {
  return (
    <div className="blue text-center">
      <CardTitleText login={props.login} />
    </div>
  );
}

export default CardTitle;
