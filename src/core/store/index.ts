import { rootReducer } from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware, { END } from '@redux-saga/core'
import { rootSaga } from 'src/core/saga'
import { AppStore } from 'types/app'

export const IS_SERVER = !(
	typeof window !== 'undefined' &&
	window.document &&
	window.document.createElement
)

export default (initState: {}) => {
	const sagaMiddleware = createSagaMiddleware()

	const store = configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				immutableCheck: true,
				serializableCheck: true,
				thunk: false
			}).concat([sagaMiddleware]),
		preloadedState: initState
	}) as AppStore

	store.runSaga = sagaMiddleware.run
	store.close = () => store.dispatch(END)

	if (!IS_SERVER) {
		sagaMiddleware.run(rootSaga)
	}

	return { store }
}
