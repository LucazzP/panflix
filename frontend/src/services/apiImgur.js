import axios from 'axios';

const apiImgur = axios.create({
  baseURL: 'https://api.imgur.com/3/',
  headers: { Authorization: 'Client-ID 98af2b0b1253d92' },
});

export default apiImgur;
