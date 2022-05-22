import React from 'react';
import ReactDOM from 'react-dom';
import App from 'client/App/App';
import 'styles/base.scss';
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

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));
