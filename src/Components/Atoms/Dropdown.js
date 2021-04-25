import React from "react";

const Dropdown = (props) => {
  return (
    <div>
      <select onChange={props.onChange}>
        <option>select</option>
        {props.options &&
          props.options.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
