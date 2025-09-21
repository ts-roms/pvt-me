import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_SITE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export default api;
