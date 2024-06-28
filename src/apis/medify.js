import axios from "axios";

export const getAllStates = async () => {
  const config = {
    method: "GET",
    url: "https://meddata-backend.onrender.com/states",
  };

  const response = await axios(config);
  return response.data;
};

export const getAllCitiesInState = async (state) => {
  const config = {
    method: "GET",
    url: `https://meddata-backend.onrender.com/cities/${state}`,
  };

  const response = await axios(config);

  return response.data;
};

export const getAllMedicalCenters = async (state, city) => {
  const config = {
    method: "GET",
    url: `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`,
  };

  await axios(config).data;
};
