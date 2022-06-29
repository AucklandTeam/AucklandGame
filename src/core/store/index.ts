import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from '@redux-saga/core'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { rootSaga } from 'src/core/saga'
import { AppStore, State } from 'types/app'
import { rootReducer } from './rootReducer'

export const IS_SERVER = !(typeof window !== 'undefined' && window.document && window.document.createElement)

function getComposeEnhancers() {
    if (process.env.NODE_ENV !== 'production' && !IS_SERVER) {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    }

    return compose
}

export function configureStore(initialState: State, url: string) {
    const history = IS_SERVER ? createMemoryHistory({ initialEntries: [url] }) : createBrowserHistory()

    const sagaMiddleware = createSagaMiddleware()
    const composeEnhancers = getComposeEnhancers()
    const middlewares = [sagaMiddleware]

    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares))) as AppStore

    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END)

    if (!IS_SERVER) {
        sagaMiddleware.run(rootSaga)
    }

    return { store, history }
}
