import { get, post } from "axios";

const BASE_URL = "https://findfalcone.herokuapp.com/";

export const getPlanets = () => {
  return get(BASE_URL + "planets");
};

export const getVehicles = () => {
  return get(BASE_URL + "vehicles");
};

export const getToken = async () => {
  return post(
    BASE_URL + "token",
    {},
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
};

export const findFalcone = (data) => {
  return post(BASE_URL + "find", data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
