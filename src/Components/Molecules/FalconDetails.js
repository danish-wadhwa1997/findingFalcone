import React from "react";
import Button from "../Atoms/Button";

const FalconDetails = (props) => {
  const [message, setMessage] = React.useState();
  const [planet, setPlanet] = React.useState();
  React.useEffect(() => {
    const { falconDetails } = props;
    if (falconDetails.status === "success") {
      setMessage(
        "Success! Congratulations on Finding Falcone. King Shan is mighty pleased."
      );
      setPlanet(falconDetails.planet_name);
    } else {
      setMessage("Failure! King Shan wants you to try again!");
    }
  }, []);

  return (
    <div>
      <h3>{message}</h3>
      {props.falconDetails.status === "success" && (
        <>
          <h4>Time Taken: {props.timeTaken}</h4>
          <h4>Planet Found: {planet}</h4>
        </>
      )}
      <div>
        <Button onClick={props.onStartAgain}>Start Again</Button>
      </div>
    </div>
  );
};

export default FalconDetails;
