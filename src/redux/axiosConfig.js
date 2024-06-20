import axios from "axios";
import store from "./storeConfig"; // Asegúrate de usar la ruta correcta a tu store

// Configurar el interceptor
axios.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
