import { all, fork } from 'redux-saga/effects';
import listSaga from './list';
import searchSaga from './search';
import creditsSaga from './credits';

export default function* rootSaga() {
    yield all([
        fork(listSaga),
        fork(searchSaga),
        fork(creditsSaga),
    ]);
}
