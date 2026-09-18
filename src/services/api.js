import axios from "axios";

const api = axios.create({
  baseURL: "https://ewbackend-production-1241.up.railway.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;