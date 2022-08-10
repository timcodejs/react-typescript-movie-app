import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducer';
import rootSaga from '../saga';

const logger = createLogger();
const sagaMidleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, sagaMidleware))
);

export const sagaRun = () => {
    sagaMidleware.run(rootSaga);
};

export default store;