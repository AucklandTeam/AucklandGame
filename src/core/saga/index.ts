import { all, call } from '@redux-saga/core/effects'
import userWatcher from 'pages/Auth/sagas/watchers'
import userEditWatcher from 'pages/ProfileEdit/sagas/watchers'

export function* rootSaga() {
	yield all([call(userWatcher), call(userEditWatcher)])
}
