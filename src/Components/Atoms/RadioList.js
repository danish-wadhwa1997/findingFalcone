import React from "react";

const RadioList = (props) => {
  return (
    <div onChange={props.onChange}>
      {props.options &&
        props.options.map((option) => (
          <React.Fragment key={option.name}>
            <input
              type="radio"
              id={option.name}
              name={props.groupName}
              disabled={!option.eligible}
            />
            <label
              htmlFor={option.name}
            >{`${option.name} (${option.total_no})`}</label>
          </React.Fragment>
        ))}
    </div>
  );
};

export default RadioList;
