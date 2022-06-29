import { all, takeLatest } from '@redux-saga/core/effects'
import { fetchUser, logout, signIn, signUp, authYandexLogin, authYandexGetServiceID } from '../actions'
import {
    fetchUserWorker,
    logoutWorker,
    signInWorker,
    signUpWorker,
    authYandexWorker,
    authYandexLoginWorker,
} from './workers'

export default function* userWatcher() {
    yield all([
        takeLatest(fetchUser, fetchUserWorker),
        takeLatest(signIn, signInWorker),
        takeLatest(signUp, signUpWorker),
        takeLatest(logout, logoutWorker),
        takeLatest(authYandexGetServiceID, authYandexWorker),
        takeLatest(authYandexLogin, authYandexLoginWorker),
    ])
}
