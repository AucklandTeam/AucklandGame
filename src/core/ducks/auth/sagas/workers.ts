import { SagaIterator } from 'redux-saga'
import { call, put } from '@redux-saga/core/effects'
import {
	getAuthYandexId,
	getUserRequest,
	loginRequest,
	logoutRequest,
	signUpRequest,
	authWithYandex,
	userLocalSync
} from '../api'
import {
	authYandexLogin,
	fetchUser,
	setUserData,
	setUserFailed,
	setUserID,
	setUserStatus,
	signIn,
	signUp
} from '../actions'
import history from 'src/core/history'
import { RouterPath } from 'shared/consts'
import { ServiceID } from '../types'
import { User } from 'src/client/components/@shared/types'

export function* fetchUserWorker(): SagaIterator<void> {
	yield put(setUserStatus('pending'))
	try {
		const response: User = yield call(getUserRequest)
		yield put(setUserData(response))
		yield put(setUserStatus('success'))
		const user = yield call(userLocalSync, {
			login: response.login,
			avatar: response.avatar
		})
		yield put(setUserID(user?.id))
	} catch (e) {
		// @ts-ignore
		yield put(setUserFailed(e.reason))
		yield put(setUserStatus('failed'))
	}
}

export function* signInWorker({
	payload
}: ReturnType<typeof signIn>): SagaIterator<void> {
	const { setFormError, ...values } = payload
	try {
		yield call(loginRequest, values)
		yield put(fetchUser())
		history.push(RouterPath.Main)
	} catch (e) {
		if (setFormError) {
			// @ts-ignore
			setFormError(e.reason)
		}
	}
}

export function* signUpWorker({
	payload
}: ReturnType<typeof signUp>): SagaIterator<void> {
	const { setFormError, ...values } = payload
	try {
		yield call(signUpRequest, values)
		yield put(fetchUser())
		history.push(RouterPath.Main)
	} catch (e) {
		if (setFormError) {
			// @ts-ignore
			setFormError(e.reason)
		}
	}
}

export function* logoutWorker(): SagaIterator<void> {
	try {
		yield call(logoutRequest)

		yield put(setUserData(null))
		history.push(RouterPath.Main)
	} catch (e) {
		console.error(e)
	}
}

export function* authYandexWorker(): SagaIterator<void> {
	try {
		const response: ServiceID = yield call(getAuthYandexId)
		history.push(
			`https://oauth.yandex.ru/authorize?response_type=code&client_id=${response.service_id}&redirect_uri=https://${window.location.host}${RouterPath.SignYandex}`
		)
	} catch (e) {
		console.error(e)
	}
}

export function* authYandexLoginWorker({
	payload
}: ReturnType<typeof authYandexLogin>): SagaIterator<void> {
	try {
		yield call(authWithYandex, payload)
		yield put(fetchUser())
		history.push(RouterPath.Main)
	} catch (e) {
		console.error(e)
	}
}
