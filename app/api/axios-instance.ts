import axios from 'axios';

const api = axios.create({
  baseURL: process.env.SERVER_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default api;
