import React from "react";
import Dropdown from "../Atoms/Dropdown";
import Button from "../Atoms/Button";
import RadioList from "../Atoms/RadioList";
import {
  findFalcone,
  getPlanets,
  getVehicles,
  getToken,
} from "../../APIs/index";
const PlanetSearch = (props) => {
  const [timeTaken, setTimeTaken] = React.useState(0);
  const [planets, setPlanets] = React.useState();
  const [vehicles, setVehicles] = React.useState();
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

  const [destination1, setDestination1] = React.useState({
    planets: planets,
    vehicles: vehicles,
  });
  const [destination2, setDestination2] = React.useState({
    planets: planets,
    vehicles: vehicles,
  });
  const [destination3, setDestination3] = React.useState({
    planets: planets,
    vehicles: vehicles,
  });
  const [destination4, setDestination4] = React.useState({
    planets: planets,
    vehicles: vehicles,
  });

  const [planet_names, setPlanet_names] = React.useState([]);
  const [vehicle_names, setVehicle_names] = React.useState([]);
  // const [token, setToken] = React.useState();
  const setDestination1Values = (e) => {
    let planet = planets.find((planet) => planet.name === e.target.value);

    let eligibleVehicles = vehicles.map((vehicle) => {
      if (vehicle.max_distance >= planet.distance && vehicle.total_no > 0) {
        vehicle.eligible = true;
      } else {
        vehicle.eligible = false;
      }
      return vehicle;
    });

    let destination = {
      planets: destination1.planets ? destination1.planets : planets,
      planet: planet,
      vehicles: eligibleVehicles,
    };

    let new_planets = planet_names;
    new_planets[0] = planet.name;
    setPlanet_names(new_planets);
    setPlanets(planets.filter((option) => option.name !== planet.name));
    setDestination1(destination);
  };

  const setDestination2Values = (e) => {
    let planet = planets.find((planet) => planet.name === e.target.value);

    let eligibleVehicles = vehicles.map((vehicle) => {
      if (vehicle.max_distance >= planet.distance && vehicle.total_no !== 0) {
        vehicle.eligible = true;
      } else {
        vehicle.eligible = false;
      }
      return vehicle;
    });

    let destination = {
      planets: destination2.planets ? destination2.planets : planets,
      planet: planet,
      vehicles: eligibleVehicles,
    };
    let new_planets = planet_names;
    new_planets[1] = planet.name;
    setPlanet_names(new_planets);
    setPlanets(planets.filter((option) => option.name !== planet.name));
    setDestination2(destination);
  };

  const setDestination3Values = (e) => {
    let planet = planets.find((planet) => planet.name === e.target.value);

    let eligibleVehicles = vehicles.map((vehicle) => {
      if (vehicle.max_distance >= planet.distance && vehicle.total_no !== 0) {
        vehicle.eligible = true;
      } else {
        vehicle.eligible = false;
      }
      return vehicle;
    });

    let destination = {
      planets: destination3.planets ? destination3.planets : planets,
      planet: planet,
      vehicles: eligibleVehicles,
    };

    let new_planets = planet_names;
    new_planets[2] = planet.name;
    setPlanet_names(new_planets);
    setPlanets(planets.filter((option) => option.name !== planet.name));
    setDestination3(destination);
  };

  const setDestination4Values = (e) => {
    let planet = planets.find((planet) => planet.name === e.target.value);

    let eligibleVehicles = vehicles.map((vehicle) => {
      if (vehicle.max_distance >= planet.distance && vehicle.total_no !== 0) {
        vehicle.eligible = true;
      } else {
        vehicle.eligible = false;
      }
      return vehicle;
    });

    let destination = {
      planets: destination4.planets ? destination4.planets : planets,
      planet: planet,
      vehicles: eligibleVehicles,
    };
    let new_planets = planet_names;
    new_planets[3] = planet.name;
    setPlanet_names(new_planets);
    setPlanets(planets.filter((option) => option.name !== planet.name));
    setDestination4(destination);
  };

  const handleVehicleChange = (e, destination) => {
    let remainingVehicles = vehicles.map((vehicle) => {
      if (vehicle.name === e.target.id) {
        vehicle.total_no -= 1;
      }
      return vehicle;
    });

    let selectedVehicle = remainingVehicles.find(
      (vehicle) => vehicle.name === e.target.id
    );

    let time = 0;
    switch (destination) {
      case 1:
        time = destination1.planet.distance / selectedVehicle.speed;
        break;
      case 2:
        time = destination2.planet.distance / selectedVehicle.speed;
        break;
      case 3:
        time = destination3.planet.distance / selectedVehicle.speed;
        break;
      case 4:
        time = destination4.planet.distance / selectedVehicle.speed;
        break;
      default:
    }
    let newVehicles = vehicle_names;
    newVehicles[destination - 1] = selectedVehicle.name;
    setVehicle_names(newVehicles);

    setVehicles(remainingVehicles);
    setTimeTaken(timeTaken + time);
  };

  // const [falcone, setFalcone] = React.useState();
  const searchFalcone = () => {
    if (vehicle_names.length > 0 && planet_names.length > 0) {
      getToken()
        .then((res) => {
          if (res.status === 200) {
            let token = res.data.token;
            findFalcone({
              token: token,
              vehicle_names: vehicle_names,
              planet_names: planet_names,
            })
              .then((res) => {
                if (res.status === 200) {
                  if (res.data.status === "success") {
                    console.log(res.data);
                    props.findFalcone({
                      falconDetails: res.data,
                      timeTaken: timeTaken,
                    });
                  }
                }
              })
              .catch((error) => console.error(error));
          }
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <h5>Select planets you want to search in:</h5>
      <div>
        <Dropdown
          options={destination1.planets || planets}
          onChange={setDestination1Values}
        />
        <Dropdown
          options={destination2.planets || planets}
          onChange={setDestination2Values}
        />
        <Dropdown
          options={destination3.planets || planets}
          onChange={setDestination3Values}
        />
        <Dropdown
          options={destination4.planets || planets}
          onChange={setDestination4Values}
        />
      </div>

      <div>
        <h3>Time Taken: {timeTaken}</h3>
      </div>
      <div>
        {destination1.vehicles !== 0 && (
          <RadioList
            options={destination1.vehicles}
            onChange={(e) => handleVehicleChange(e, 1)}
            groupName="destination1"
          />
        )}
        {destination2 && (
          <RadioList
            options={destination2.vehicles}
            onChange={(e) => handleVehicleChange(e, 2)}
            groupName="destination2"
          />
        )}
        {destination3 && (
          <RadioList
            options={destination3.vehicles}
            onChange={(e) => handleVehicleChange(e, 3)}
            groupName="destination3"
          />
        )}
        {destination4 && (
          <RadioList
            options={destination4.vehicles}
            onChange={(e) => handleVehicleChange(e, 4)}
            groupName="destination4"
          />
        )}
      </div>
      <Button onClick={searchFalcone}>Find Falcone</Button>
    </div>
  );
};

export default PlanetSearch;
