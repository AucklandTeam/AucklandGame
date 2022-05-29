import { Action, Store } from 'redux'
import { SagaMiddleware } from '@redux-saga/core'
import {Dispatch} from 'redux';

type Collection<K extends string | number, V> = Record<K, V>

declare global {
	interface Window { SSR_DATA: any; }
}

export interface ReduxAction<T = any, P = any> extends Action {
	type: T
	payload?: P
}

export type RouterFetchDataArgs = {
	dispatch: Dispatch<ReduxAction>;
	match: match<{ slug: string }>;
}

export type AppStore = Store & {
	runSaga: SagaMiddleware['run']
	close: () => void
}

