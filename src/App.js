import "./App.css";
import React from "react";
import FalconDetails from "./Components/Molecules/FalconDetails";
import PlanetSearch from "./Components/Molecules/PlanetSearch";
function App() {
  const [falconDetails, setFalconDetails] = React.useState();
  const findFalcone = (data) => {
    setFalconDetails(data);
  };
  return (
    <div className="App">
      <h1>Finding Falcone!</h1>

      {!falconDetails && <PlanetSearch findFalcone={findFalcone} />}

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
