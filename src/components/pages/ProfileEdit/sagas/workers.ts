import {SagaIterator} from 'redux-saga';
import {call, put} from '@redux-saga/core/effects';
import {changeAvatarRequest, userRequest} from '../api';
import {editUser, changeAvatar} from '../actions';
import history from 'src/core/history';
import {RouterPath} from 'src/shared/consts';
import {setUserData} from 'src/components/pages/Auth/actions';

export function* editUserWorker({payload}:ReturnType<typeof editUser>):SagaIterator<void>{
    const {setFormError, ...values} = payload;
    try {
        const response = yield call(userRequest, values);
        console.log(response);
        yield put(setUserData(response));
        history.push(RouterPath.Profile);

    } catch (e) {
        if (setFormError) {
            // @ts-ignore
            setFormError(e.reason);
        }
    }
}

export function* changeAvatarWorker({payload}:ReturnType<typeof changeAvatar>):SagaIterator<void> {
    const {setFormError, formData} = payload;
    try {
        const response = yield call(changeAvatarRequest, formData);
        yield put(setUserData(response));
        history.push(RouterPath.Profile);
    } catch (e){
        if (setFormError) {
            // @ts-ignore
            setFormError(e.reason);
        }
    }
}
