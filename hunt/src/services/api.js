import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users/diego3g',
});

export default api;
