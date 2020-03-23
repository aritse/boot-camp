import React from "react";

function List({ groceries }) {
  return (
    <ul className="list-group">
      {groceries.map(({ name, id }) => (
        <li key={id} className="list-group-item">
          {name}
        </li>
      ))}
    </ul>
  );
}

export default List;