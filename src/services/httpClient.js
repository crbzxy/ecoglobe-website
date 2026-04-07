import axios from 'axios';

const defaultApiBaseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  'https://ecoglobe-contact-server-production.up.railway.app';

export const httpClient = axios.create({
  baseURL: defaultApiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Repropaga el error para que la capa de servicios o el componente lo manejen
    return Promise.reject(error);
  },
);

