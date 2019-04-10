import axios from 'axios';

const api = axios.create({
    baseURL : 'http://omnistack-teco.herokuapp.com',
});

export default api;