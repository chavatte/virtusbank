import axios from "axios";

const API_BASE_PATH = "api/virtusbank";

const api = axios.create({
  baseURL: `https://api-virtusbank.fly.dev/${API_BASE_PATH}`,
});

api.interceptors.request.use((config) => {
  if (config.url !== "/user/signup") {
    const token = localStorage.getItem("@VirtusBank:Token") || "";
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
