import { LOAD_ALLPOSTS_REQUEST, LOAD_ALLPOSTS_SUCCESS, LOAD_ALLPOSTS_FAILURE, MovieProps } from '../types/movieTypes';
import { ActionRequest } from '../actions/movieActions';
import produce from 'immer';

export const intialState: MovieProps = {
    results: {
        popular: [],
        nowplaying: [],
        toprated: [],
        upcoming: [],
    },
    loading: false,
    success: false,
    error: null,
}

const ListReducer = (state: MovieProps = intialState, action: ActionRequest) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOAD_ALLPOSTS_REQUEST:
                draft.loading = true;
                break;

            case LOAD_ALLPOSTS_SUCCESS:
                draft.loading = false;
                draft.success = true;
                draft.results = action.payload.data;
                break;

            case LOAD_ALLPOSTS_FAILURE:
                draft.error = action.payload;
                break;

            default: 
                return state;
        }
    })
}

export default ListReducer;