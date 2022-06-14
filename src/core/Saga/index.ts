import {all, call} from '@redux-saga/core/effects';
import userWatcher from 'src/components/pages/Auth/sagas/watchers';
import userEditWatcher from '../../components/pages/ProfileEdit/sagas/watchers';
import leaderBoardWatcher from '@src/components/pages/Results/sagas/watcher';


export function* rootSaga() {
    yield all([
        call(userWatcher),
        call(userEditWatcher),
        call(leaderBoardWatcher)
    ]);
}
