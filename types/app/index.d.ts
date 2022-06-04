import { Action, Store } from 'redux'
import { SagaMiddleware } from '@redux-saga/core'
import {Dispatch} from 'redux'
import {UserState} from 'src/core/ducks/auth/types'
import {LeaderBoardState} from 'src/core/ducks/scores/types';

type Collection<K extends string | number, V> = Record<K, V>

declare global {
	interface Window {
		SSR_DATA: any
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
	}
}

export interface ReduxAction<T = any, P = any> extends Action {
	type: T
	payload?: P
}

export interface State {
		readonly user: UserState
		readonly leaderBoard: LeaderBoardState
	}

export type RouterFetchDataArgs = {
	dispatch: Dispatch<ReduxAction>
	match: match<{ slug: string }>
}

export type AppStore = Store & {
	runSaga: SagaMiddleware['run']
	close: () => void
}

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
