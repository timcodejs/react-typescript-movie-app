import { LOAD_ALLPOSTS_REQUEST, LOAD_ALLPOSTS_SUCCESS, LOAD_ALLPOSTS_FAILURE, ResultsType } from '../types/movieTypes';

export const loadAllpostsRequest = () => ({
    type: LOAD_ALLPOSTS_REQUEST,
});

export const loadAllpostsSuccess = (results: ResultsType) => ({
    type: LOAD_ALLPOSTS_SUCCESS,
    payload: {
        data: results
    }
});

export const loadAllpostsFailure = (error: any) => ({
    type: LOAD_ALLPOSTS_FAILURE,
    payload: error
});

export type ActionRequest = 
    | ReturnType<typeof loadAllpostsRequest> 
    | ReturnType<typeof loadAllpostsSuccess> 
    | ReturnType<typeof loadAllpostsFailure>;