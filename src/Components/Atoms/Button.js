import React from "react";
import "./button.css";
const Button = (props) => {
  return (
    <div className="padding">
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
};

export default Button;
