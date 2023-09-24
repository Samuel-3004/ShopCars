import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

export const fipeApi = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 5000,
});
