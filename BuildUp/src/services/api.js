import axios from "axios";

const api = axios.create({
  baseURL:
    "https://apibuildup-c4ftgbgebabxgxcd.brazilsouth-01.azurewebsites.net/api",
});

export default api;
