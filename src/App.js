import "./App.css";
import React from "react";
import FalconDetails from "./Components/Molecules/FalconDetails";
import PlanetSearch from "./Components/Molecules/PlanetSearch";
import PlanetSearchDetails from "./Components/Molecules/PlanetSearchDetails";
import { getPlanets, getVehicles } from "./APIs/index";
import Toolbar from "./Components/Molecules/Toolbar";
function App() {
  const [falconDetails, setFalconDetails] = React.useState();
  const findFalcone = (data) => {
    setFalconDetails(data);
  };
  const [planets, setPlanets] = React.useState([]);
  const [vehicles, setVehicles] = React.useState([]);
  const [reset, setReset] = React.useState(false);
  React.useEffect(() => {
    getPlanets()
      .then((res) => {
        if (res.status === 200) {
          setPlanets(res.data);
        }
      })
      .catch((error) => console.error(error));
    getVehicles()
      .then((res) => {
        if (res.status === 200) {
          setVehicles(res.data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const handleResetClick = () => {
    setReset(!reset);
  };
  return (
    <div className="App">
      <Toolbar onReset={handleResetClick} reset={reset} />
      <h1>Finding Falcone!</h1>

      {/* {!falconDetails && <PlanetSearch findFalcone={findFalcone} />} */}

      {!falconDetails && (
        <PlanetSearchDetails
          findFalcone={findFalcone}
          planets={planets}
          vehicles={vehicles}
          reset={reset}
        />
      )}

      {falconDetails && (
        <FalconDetails
          falconDetails={falconDetails.falconDetails}
          timeTaken={falconDetails.timeTaken}
        />
      )}
    </div>
  );
}

export default App;
