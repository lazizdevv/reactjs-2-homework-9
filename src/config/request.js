import axios from 'axios';
import { loadState } from './storage';

const request = axios.create({ baseURL: 'https://admin-panel-api-rose.vercel.app' });

request.interceptors.request.use((config) => {
  const token = loadState('user')?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token muddati tugagan yoki noto'g'ri bo'lsa, tokenni o'chirish
      localStorage.removeItem('user');
      window.location.href = '/login'; // Yo'naltirish
    }
    return Promise.reject(error);
  }
);

export { request };
