import React from "react";
import "./style.css";

function FriendCard(props) {
  const handleClick = ({ target: { id } }) => props.handleClick(id);

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span className="remove" id={props.id} onClick={handleClick}>
        𝘅
      </span>
    </div>
  );
}

export default FriendCard;
