import { SagaIterator } from 'redux-saga'
import { call, put, select } from '@redux-saga/core/effects'
import { changeAvatarRequest, userLocalUpdate, userRequest } from '../api'
import { editUser, changeAvatar } from '../actions'
import history from 'src/core/history'
import { RouterPath } from 'shared/consts'
import { setUserData } from 'src/core/ducks/auth/actions'
import { userSelector } from 'src/core/ducks/auth/selectors'

export function* editUserWorker({ payload }: ReturnType<typeof editUser>): SagaIterator<void> {
    const { setFormError, ...values } = payload
    try {
        const response = yield call(userRequest, values)
        const user = yield select(userSelector)
        yield call(userLocalUpdate, { id: user.user_id, avatar: response.avatar, login: response.login })
        yield put(setUserData(response))
        history.push(RouterPath.Profile)
    } catch (e) {
        if (setFormError) {
            // @ts-ignore
            setFormError(e.reason)
        }
    }
}

export function* changeAvatarWorker({ payload }: ReturnType<typeof changeAvatar>): SagaIterator<void> {
    const { setFormError, formData } = payload
    try {
        const response = yield call(changeAvatarRequest, formData)
        const user = yield select(userSelector)
        yield call(userLocalUpdate, { id: user.user_id, avatar: response.avatar, login: response.login })
        yield put(setUserData(response))
        history.push(RouterPath.Profile)
    } catch (e) {
        if (setFormError) {
            // @ts-ignore
            setFormError(e.reason)
        }
    }
}
