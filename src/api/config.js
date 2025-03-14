import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8005/api/v1"; // Use environment variable

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to every request if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Handle unauthorized requests globally
api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response?.status === 401) {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect to login on unauthorized access
  }
  return Promise.reject(error);
});

export default api;
