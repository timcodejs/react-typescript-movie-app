import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import { searchAllpostsSuccess, searchAllpostsFailure } from '../actions/searchActions';
import { api } from '../api/movie-api';
import { SEARCH_ALLPOSTS_REQUEST, SearchType } from '../types/scarchTypes';

export let query: string = '';

async function searchAPI() {
  return await ((await api.get(`/search/movie?query=${query}`)).data).results;
}

function* search(action: any) {
  try {
    query = action.payload.query;
    const resSearch: SearchType[] = yield call(searchAPI);
    
    yield put(searchAllpostsSuccess({
      search: resSearch
    }))
  } catch (error: any) {
    yield put(searchAllpostsFailure(error));
  }
}

function* watchSearch() {
  yield takeLatest(SEARCH_ALLPOSTS_REQUEST, search);
}

export default function* searchSaga() {
  yield all([
      fork(watchSearch)
  ])
}