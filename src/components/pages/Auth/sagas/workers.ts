import {SagaIterator} from 'redux-saga';
import {call, put} from '@redux-saga/core/effects';
import {authWithYandex, getAuthYandexId, getUserRequest, loginRequest, logoutRequest, signUpRequest} from '../api';
import {authYandexLogin, fetchUser, setUserData, setUserFailed, setUserStatus, signIn, signUp} from '../actions';
import history from 'src/core/history';
import {RouterPath} from 'src/shared/consts';
import {ServiceID} from '../types';

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
        yield call(loginRequest, values);
        yield put(fetchUser());
        history.push(RouterPath.Main);

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
        yield call(signUpRequest, values);
        yield put(fetchUser());
        history.push(RouterPath.Main);
    } catch (e){
        if (setFormError) {
            // @ts-ignore
            setFormError(e.reason);
        }
    }
}

export function* logoutWorker():SagaIterator<void>{
    try {
        yield call(logoutRequest);

        yield put(setUserData(null));

        history.push(RouterPath.Main);
    } catch (e){
        console.error(e);
    }
}

export function* authYandexWorker():SagaIterator<void>{
    try {
        const response: ServiceID = yield call(getAuthYandexId);
        history.push(`https://oauth.yandex.ru/authorize?response_type=code&client_id=${response.service_id}&redirect_uri=${window.location.host}${RouterPath.SignYandex}`);
    }catch (e) {
        console.error(e);
    }
}

export function* authYandexLoginWorker({payload}:ReturnType<typeof authYandexLogin>):SagaIterator<void>{
    try {
        yield call(authWithYandex, payload);
        yield put(fetchUser());
        history.push(RouterPath.Main);
    }catch (e) {
        console.error(e);
    }

}
