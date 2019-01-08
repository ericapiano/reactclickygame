import React from "react";
import "./Block.css";

const Block = props => (
  <div className={props.shakeWrapper === "true" ? "wrapperShake" : "wrapper"}>
    {props.pictures}
  </div>
);

export default Block;
