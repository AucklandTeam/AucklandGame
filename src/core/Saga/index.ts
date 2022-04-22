import {all, call} from '@redux-saga/core/effects';
import userWatcher from 'src/components/pages/Auth/sagas/watchers';

export function* rootSaga() {
    yield all([
        call(userWatcher)
    ]);
}
