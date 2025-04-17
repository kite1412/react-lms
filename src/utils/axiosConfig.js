import axios from "axios";
import { JWT } from "../constants/auth";

const API = axios.create({
  baseURL: "http://localhost:5001",
  withCredentials: true,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem(JWT);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
