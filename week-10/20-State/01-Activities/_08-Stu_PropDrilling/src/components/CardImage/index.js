import React from "react";

function CardImg(props) {
  return (
    <div>
      <img className="card-img" alt="user thumbnail" src={props.image} />
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    </div>
  );
}

export default CardImg;
