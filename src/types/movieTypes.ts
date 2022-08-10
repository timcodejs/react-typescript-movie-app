export const LOAD_ALLPOSTS_REQUEST = "LOAD_ALLPOSTS_REQUEST" as const;
export const LOAD_ALLPOSTS_SUCCESS = "LOAD_ALLPOSTS_SUCCESS" as const;
export const LOAD_ALLPOSTS_FAILURE = "LOAD_ALLPOSTS_FAILURE" as const;

export type MovieType = {
    id: number;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    original_title: string;
    vote_count: number;
    vote_average: number;
    backdrop_path: string
}

export type ResultsType = {
    popular: MovieType[]
    nowplaying: MovieType[]
    toprated: MovieType[]
    upcoming: MovieType[],
}

export type MovieProps = {
    results: ResultsType
    loading: boolean
    success: boolean
    error: null
}