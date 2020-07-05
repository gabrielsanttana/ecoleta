import axios from 'axios';

const api = axios.create({
  baseURL: 'http://LOCAL_IP_ADDRESS:3333',
});

export default api;
