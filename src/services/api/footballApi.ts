import axios from "axios";

const token = FOOTBALL_API_TOKEN;

const api = axios.create({
  // baseURL: `${base_uri}`,
  headers: {
    "X-Auth-Token": `${token}`,
  },
  maxRedirects: 0,
});

export default api;
