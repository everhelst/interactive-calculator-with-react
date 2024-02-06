import React from "react";
import "../style-sheets/Button.css";

function Button(props) {
  const isOperator = (val) => {
    return isNaN(val) && val !== "." && val !== "=";
  };

  return (
    <button
      className={`container-button ${
        isOperator(props.children) ? "operator" : ""
      }`.trimEnd()}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Button;
