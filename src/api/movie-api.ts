import axios from "axios";

export const API_URL: string =  'https://api.themoviedb.org/3/';
export const IMAGE_URL: string = 'https://image.tmdb.org/t/p/original';

export const api = axios.create({
    baseURL: API_URL,
    params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: 'ko',
        page: 1,
    }
});
