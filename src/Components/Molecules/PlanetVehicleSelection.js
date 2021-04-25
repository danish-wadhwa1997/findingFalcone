import React from "react";
import Dropdown from "../Atoms/Dropdown";
import RadioList from "../Atoms/RadioList";

const PlanetVehicleSelection = (props) => {
  const [selectedPlanet, setSelectedPlanet] = React.useState();
  const [selectedVehicle, setSelectedVehicle] = React.useState();

  return (
    <div>
      <Dropdown />
      <RadioList />
    </div>
  );
};

export default PlanetVehicleSelection;
