import axios from "axios";

// let baseURL = "https://api.burlynutrition.com";
let baseURL = "http://localhost:4000";

export const axiosClient = axios.create({
  baseURL,
  withCredentials: true,
});

const httpClient = axios.create({
  baseURL: `${process.env.REACT_APP_CONVERTKIT_API_URL}`,
});

httpClient.defaults.headers.common["Accept"] = "application/json";
httpClient.defaults.headers.common["Content-Type"] = "application/json";
httpClient.defaults.timeout = 5000;

export { httpClient };
