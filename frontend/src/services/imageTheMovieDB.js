import axios from 'axios';

const imageApi = axios.create({ baseURL: 'https://image.tmdb.org/t/p/' });

export default imageApi;
