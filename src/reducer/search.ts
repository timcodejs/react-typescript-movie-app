import { SEARCH_ALLPOSTS_REQUEST, SEARCH_ALLPOSTS_SUCCESS, SEARCH_ALLPOSTS_FAILURE, SearchProps } from "../types/scarchTypes";
import { ActionRequest } from "../actions/searchActions";
import produce from "immer";

export const intialState: SearchProps = {
  results: {
    search: []
  },
  loading: false,
  success: false,
  error: null
}

const SearchReducer = (state: SearchProps = intialState, action: ActionRequest) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SEARCH_ALLPOSTS_REQUEST:
        draft.loading = true;
        break;
        
        case SEARCH_ALLPOSTS_SUCCESS:
          draft.loading = false;
          draft.success = true;
          draft.results = action.payload.data;
        break;

      case SEARCH_ALLPOSTS_FAILURE:
        draft.error = action.payload;
        break;

      default: 
        return state;
    }
  })
}

export default SearchReducer;