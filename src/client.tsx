import { hydrate } from 'react-dom';
import { App } from 'client/App';
import 'styles/base.scss';
import createStore from 'src/core/store';
import {Provider, useDispatch} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const { store } = createStore({
    initState: window.SSR_DATA
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
    document.querySelector('#root'));
