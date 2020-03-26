import axios from 'axios';

const api = axios.create({ baseURL: 'http://api.emillia.com.br:3030' });

export default api;