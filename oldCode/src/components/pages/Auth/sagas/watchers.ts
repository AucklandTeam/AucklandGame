import {all, takeLatest} from '@redux-saga/core/effects';
import {fetchUser, logout, signIn, signUp} from '../actions';
import {fetchUserWorker, logoutWorker, signInWorker, signUpWorker} from './workers';

export default function* userWatcher(){
    yield all([
        takeLatest(fetchUser, fetchUserWorker),
        takeLatest(signIn, signInWorker),
        takeLatest(signUp, signUpWorker),
        takeLatest(logout, logoutWorker)
    ]);
}
