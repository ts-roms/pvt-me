import axios from 'axios';

const api = axios.create({
  baseURL:
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.SERVER_BASE_URL || "http://localhost:3000",
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default api;
