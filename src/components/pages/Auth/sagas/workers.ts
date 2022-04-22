import {SagaIterator} from 'redux-saga';
import {call, put} from '@redux-saga/core/effects';
import {getUserRequest, loginRequest, logoutRequest, signUpRequest} from '../api';
import {setUserData, setUserFailed, setUserStatus, signIn, signUp} from '../actions';

export function* fetchUserWorker():SagaIterator<void> {
    yield put(setUserStatus('pending'));
    try {
        const response = yield call(getUserRequest);
        yield put(setUserData(response));
        yield put(setUserStatus('success'));
    } catch (e) {
        // @ts-ignore
        yield put(setUserFailed(e.reason));
        yield put(setUserStatus('failed'));
    }
}

export function* signInWorker({payload}:ReturnType<typeof signIn>):SagaIterator<void>{
    const {setFormError, ...values} = payload;
    try {
        const response = yield call(loginRequest, values);
    } catch (e) {
        if (setFormError) {
            // @ts-ignore
            setFormError(e.reason);
        }
    }
}

export function* signUpWorker({payload}:ReturnType<typeof signUp>):SagaIterator<void> {
    const {setFormError, ...values} = payload;
    try {
        const response = yield call(signUpRequest, values);
    } catch (e){
        if (setFormError) {
            // @ts-ignore
            setFormError(e.reason);
        }
    }
}

export function* logoutWorker():SagaIterator<void>{
    try {
        const response = yield call(logoutRequest);
        yield put(setUserData(null));
    } catch (e){
        console.error(e);
    }
}
