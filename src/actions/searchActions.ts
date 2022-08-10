import { SEARCH_ALLPOSTS_REQUEST, SEARCH_ALLPOSTS_SUCCESS, SEARCH_ALLPOSTS_FAILURE, SearchResult } from "../types/scarchTypes";

export const searchAllpostsRequest = (query: string) => ({  
    type: SEARCH_ALLPOSTS_REQUEST,
    payload: {
        query: query
    }
});

export const searchAllpostsSuccess = (results: SearchResult) => ({
    type: SEARCH_ALLPOSTS_SUCCESS,
    payload: {
        data: results
    }
});

export const searchAllpostsFailure = (error: any) => ({
    type: SEARCH_ALLPOSTS_FAILURE,
    payload: error
});

export type ActionRequest = 
    | ReturnType<typeof searchAllpostsRequest> 
    | ReturnType<typeof searchAllpostsSuccess> 
    | ReturnType<typeof searchAllpostsFailure>;