import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button onClick={props.clickMe} className={`card-btn ${props["data-value"]}`} {...props} />
  );
}

export default CardBtn;
