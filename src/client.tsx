import { hydrate } from 'react-dom';
import App from 'client/App';
//const App = require('client/App')
import 'styles/base.scss';
import createSsr from '@issr/core';
import createStore from 'src/core/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const SSR = createSsr();

const { store } = createStore({
    initState: window.SSR_DATA
});

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

hydrate(
    <SSR>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </SSR>,
    document.querySelector('#root'));
