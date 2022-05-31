import { all, call } from '@redux-saga/core/effects'
import userWatcher from 'src/core/ducks/auth/sagas/watchers'
import userEditWatcher from 'src/core/ducks/profile/sagas/watchers'

export function* rootSaga() {
	yield all([call(userWatcher), call(userEditWatcher)])
}
