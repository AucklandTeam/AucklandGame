import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/components/App/App';
import 'src/assets/base.scss';
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import configureStore from './core/store';
import {rootSaga} from './core/Saga';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore(sagaMiddleWare);
sagaMiddleWare.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));
