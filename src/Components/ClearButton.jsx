import React from "react";
import "../style-sheets/ClearButton.css";

const ClearButton = (props) => (
  <div className="clear-button" onClick={props.handleClick}>
    Clear
  </div>
);

export default ClearButton;
