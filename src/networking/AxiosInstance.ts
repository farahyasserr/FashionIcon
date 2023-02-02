import axios from 'axios';
import {
  PARAMS,
  X_RAPID_API_HOST,
  X_RAPID_API_KEY,
  BASE_URL,
} from '../config/AsosApiConfig';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': X_RAPID_API_KEY,
    'X-RapidAPI-Host': X_RAPID_API_HOST,
  },
  params: PARAMS,
});

export default axiosInstance;
