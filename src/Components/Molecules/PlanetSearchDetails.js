import React from "react";
import PlanetVehicleSelection from "./PlanetVehicleSelection";
const PlanetSearchDetails = (props) => {
  const [planets, setPlanets] = React.useState(props.planets);
  const [vehicles, setVehicles] = React.useState(props.vehicles);
  const [changeable, setChangeable] = React.useState([]);
  const handleVehicleChange = (dest) => {};
  const handlePlanetChange = (dest) => {};
  return (
    <div>
      <h3>Select Planets you want to search in:</h3>
      <PlanetVehicleSelection
        planets={planets}
        vehicles={vehicles}
        onVehicleChange={(e) => handleVehicleChange(0)}
        onPlanetChange={(e) => handlePlanetChange(0)}
        changeable={changeable[0]}
      />
      <PlanetVehicleSelection
        planets={planets}
        vehicles={vehicles}
        onVehicleChange={(e) => handleVehicleChange(1)}
        onPlanetChange={(e) => handlePlanetChange(1)}
        changeable={changeable[1]}
      />
      <PlanetVehicleSelection
        planets={planets}
        vehicles={vehicles}
        onVehicleChange={(e) => handleVehicleChange(2)}
        onPlanetChange={(e) => handlePlanetChange(2)}
        changeable={changeable[2]}
      />
      <PlanetVehicleSelection
        planets={planets}
        vehicles={vehicles}
        onVehicleChange={(e) => handleVehicleChange(3)}
        onPlanetChange={(e) => handlePlanetChange(3)}
        changeable={changeable[3]}
      />
    </div>
  );
};

export default PlanetSearchDetails;
