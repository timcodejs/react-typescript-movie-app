import { CREDITS_ALLPOSTS_REQUEST, CREDITS_ALLPOSTS_SUCCESS, CREDITS_ALLPOSTS_FAILURE, CreditsResult } from "../types/creditsTypes";

export const creditsAllpostsRequest = (movie_id: number) => ({  
    type: CREDITS_ALLPOSTS_REQUEST,
    payload: {
      movie_id: movie_id
    }
});

export const creditsAllpostsSuccess = (results: CreditsResult) => ({
    type: CREDITS_ALLPOSTS_SUCCESS,
    payload: {
        data: results
    }
});

export const creditsAllpostsFailure = (error: any) => ({
    type: CREDITS_ALLPOSTS_FAILURE,
    payload: error
});

export type ActionRequest = 
    | ReturnType<typeof creditsAllpostsRequest> 
    | ReturnType<typeof creditsAllpostsSuccess> 
    | ReturnType<typeof creditsAllpostsFailure>;