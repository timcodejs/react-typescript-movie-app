import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import { loadAllpostsSuccess, loadAllpostsFailure } from '../actions/movieActions';
import { api } from '../api/movie-api';
import { LOAD_ALLPOSTS_REQUEST, MovieType } from '../types/movieTypes';

let movie_id: number[] = [];

async function popularAPI() {
    return await ((await api.get("movie/popular")).data).results;
}

async function nowplayingAPI() {
    return await ((await api.get("movie/now_playing")).data).results;
}

async function upcomingAPI() {
    return await ((await api.get("movie/upcoming")).data).results;
}

async function topratedAPI() {
    return await ((await api.get("movie/top_rated")).data).results;
}

function* list() {
    try {
        const resPopular: MovieType[] = yield call(popularAPI);
        const resNowplaying: MovieType[] = yield call(nowplayingAPI);
        const resUpcoming: MovieType[] = yield call(upcomingAPI);
        const resToprated: MovieType[] = yield call(topratedAPI);

        yield put(loadAllpostsSuccess({
            popular: resPopular,
            nowplaying: resNowplaying,
            upcoming: resUpcoming,
            toprated: resToprated,
        }))
    } catch (error: any) {
        yield put(loadAllpostsFailure(error));
    }
}

function* watchList() {
    yield takeLatest(LOAD_ALLPOSTS_REQUEST, list);
}

export default function* listSaga() {
    yield all([
        fork(watchList)
    ])
}