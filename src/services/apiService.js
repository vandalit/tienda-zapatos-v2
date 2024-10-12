import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/data', // Ruta a los archivos JSON en public/data/
  withCredentials: false
});

export default {
  getHomeData() {
    return apiClient.get('/home.json');
  },
  getProductosData() {
    return apiClient.get('/productos.json');
  }
};
