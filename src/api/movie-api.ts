import axios from "axios";

export const API_URL: string =  'https://api.themoviedb.org/3/';
export const IMAGE_URL: string = 'https://image.tmdb.org/t/p/original';
export const API_KEY: string = '7b60f5d61e72edfbb32b4bc1a8115f8b';

export const api = axios.create({
    baseURL: API_URL,
    params: {
        api_key: API_KEY,
        language: 'ko',
        page: 1,
    }
});
