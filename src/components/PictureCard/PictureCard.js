import React from "react";
import "./PictureCard.css";

const Characters = props => (
  <div className="card">
    <div className="img-container">
      <img
        className="img-thumbnail img-responsive"
        alt={props.name}
        src={props.image}
        onClick={() => props.clickPicture(props.id)}
      />
    </div>
  </div>
);

export default Characters;
