import { rootReducer } from './rootReducer'
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from 'src/core/Saga'

export default ({ initState = {} } = {}) => {

    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: rootReducer,
        devTools: IS_DEV,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            immutableCheck: true,
            serializableCheck: true,
            thunk: false,
        }).concat([sagaMiddleware]),
        preloadedState: initState
    })

    const RSaga = sagaMiddleware.run(rootSaga);

    return { store, RSaga };
}
