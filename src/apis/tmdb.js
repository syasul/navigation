import axios from 'axios';

const API_KEY = 'b5801640a725b1eaf282b84051ca9d2c';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: API_KEY,
    },
});

export default tmdb;