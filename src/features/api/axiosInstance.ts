// Instance Axios centralisée
// Permet une configuration cohérente pour tous les appels (baseURL, cookies, headers, etc.)
import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV?.toUpperCase() === 'DEVELOPMENT'
    ? 'http://localhost:3380'
    : 'https://api.cashsight.fr';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Nécessaire pour les sessions sécurisées (cookies)
  headers: {
    'Content-Type': 'application/json',
  },
});
