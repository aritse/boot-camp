import React from "react";

function ResultList({ results }) {
  return (
    <ul className="list-group">
      {results.map(image => (
        <li className="list-group-item" key={image.id}>
          <img alt={image.title} className="img-fluid" src={image.images.original.url} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
