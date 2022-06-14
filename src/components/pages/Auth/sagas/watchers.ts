import {all, takeLatest} from '@redux-saga/core/effects';
import {authYandexGetServiceID, authYandexLogin, fetchUser, logout, signIn, signUp} from '../actions';
import {
    authYandexLoginWorker,
    authYandexWorker,
    fetchUserWorker,
    logoutWorker,
    signInWorker,
    signUpWorker
} from './workers';

export default function* userWatcher(){
    yield all([
        takeLatest(fetchUser, fetchUserWorker),
        takeLatest(signIn, signInWorker),
        takeLatest(signUp, signUpWorker),
        takeLatest(logout, logoutWorker),
        takeLatest(authYandexGetServiceID, authYandexWorker),
        takeLatest(authYandexLogin,authYandexLoginWorker)
    ]);
}
