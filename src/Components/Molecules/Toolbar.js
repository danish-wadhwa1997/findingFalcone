import React from "react";
import Button from "../Atoms/Button";
import "./toolbar.css";
const Toolbar = (props) => {
  return (
    <div className="flex-row justify-end">
      <Button onClick={props.onReset}>Reset</Button>
      <Button>Home</Button>
    </div>
  );
};

export default Toolbar;
