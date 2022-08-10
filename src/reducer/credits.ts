import { CREDITS_ALLPOSTS_REQUEST, CREDITS_ALLPOSTS_SUCCESS, CREDITS_ALLPOSTS_FAILURE, CreditsProps, CreditsType } from '../types/creditsTypes';
import { ActionRequest } from '../actions/creditsActions';
import produce from 'immer';

export const intialState: CreditsProps = {
    results: {
      credits: {
        id: 0,
        cast: [],
        crew: []
      },
    },
    loading: false,
    success: false,
    error: null,
}

const CreditsReducer = (state: CreditsProps = intialState, action: ActionRequest) => {
    return produce(state, (draft) => {
        switch (action.type) {
          case CREDITS_ALLPOSTS_REQUEST:
            draft.loading = true;
            break;

          case CREDITS_ALLPOSTS_SUCCESS:
            draft.loading = false;
            draft.success = true;
            draft.results = action.payload.data;
            break;

          case CREDITS_ALLPOSTS_FAILURE:
            draft.error = action.payload;
            break;

          default: 
            return state;
        }
    })
}

export default CreditsReducer;