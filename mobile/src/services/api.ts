import axios from 'axios';

const api = axios.create({
  baseURL: 'http://000.000.00.000:3333',
});

export default api;
