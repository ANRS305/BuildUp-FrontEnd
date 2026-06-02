import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5246/api",
});

export default api;
