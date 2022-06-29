import { all, call } from '@redux-saga/core/effects'
import userWatcher from 'src/core/ducks/auth/sagas/watchers'
import userEditWatcher from 'src/core/ducks/profile/sagas/watchers'
import leaderBoardWatcher from 'src/core/ducks/scores/sagas/watchers'
import forumWatcher from 'src/core/ducks/forum/sagas/watchers'

export function* rootSaga() {
    yield all([call(userWatcher), call(userEditWatcher), call(leaderBoardWatcher), call(forumWatcher)])
}
