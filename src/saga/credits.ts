import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import { creditsAllpostsSuccess, creditsAllpostsFailure } from '../actions/creditsActions';
import { api } from '../api/movie-api';
import { CREDITS_ALLPOSTS_REQUEST, CreditsType } from '../types/creditsTypes';

let movie_id: number = 0;

async function creditsAPI() {
  return await ((await api.get(`/movie/${movie_id}/credits`)).data);
}

function* credits(action: any) {
  try {
    movie_id = action.payload.movie_id;
    const resCredits: CreditsType = yield call(creditsAPI);
    
    yield put(creditsAllpostsSuccess({
      credits: resCredits,
    }))
  } catch (error: any) {
      yield put(creditsAllpostsFailure(error));
  }
}

function* watchCredits() {
  yield takeLatest(CREDITS_ALLPOSTS_REQUEST, credits);
}

export default function* creditsSaga() {
  yield all([
      fork(watchCredits)
  ])
}