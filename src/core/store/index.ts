import { rootReducer } from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware, { END } from '@redux-saga/core'
import { rootSaga } from 'src/core/saga'
import { AppStore } from 'types/app'
import {useDispatch} from 'react-redux';

export const IS_SERVER = !(
	typeof window !== 'undefined' &&
	window.document &&
	window.document.createElement
)

export function CreateStore(initState: {}) {
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

	return  store
}
const store = CreateStore({})
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
