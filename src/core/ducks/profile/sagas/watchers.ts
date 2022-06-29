import { all, takeLatest } from '@redux-saga/core/effects'
import { changeAvatar, editUser } from '../actions'
import { editUserWorker, changeAvatarWorker } from './workers'

export default function* userEditWatcher() {
    yield all([takeLatest(editUser, editUserWorker), takeLatest(changeAvatar, changeAvatarWorker)])
}
