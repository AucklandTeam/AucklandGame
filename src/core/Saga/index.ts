import {all, call} from '@redux-saga/core/effects';
import userWatcher from '../../components/pages/Auth/sagas/watchers';

export function* rootSaga() {
    yield all([
        call(userWatcher)
    ]);
}
