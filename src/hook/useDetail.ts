import { useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { MovieType } from "../types/movieTypes";
import { SearchType } from "../types/scarchTypes";

export const useDetail = (initialValue: undefined | null = null) => {
    const navigate = useNavigate();

    const handler = useCallback((e: MovieType | SearchType) => {
        navigate('/react-typescript-movie-app/detail', {state: e});
    }, [navigate]);

    return handler;
}