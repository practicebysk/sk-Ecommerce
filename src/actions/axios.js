import axios from "axios";

const api = axios.create({
  baseURL: "https://sk-store-server.onrender.com",
  withCredentials: true,
});

export default api;
