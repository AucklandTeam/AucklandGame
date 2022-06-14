import {all, takeLatest} from '@redux-saga/core/effects';
import {addUserToLeaderBoardAction, getLeaderBoard} from '@src/components/pages/Results/actions';
import {addUserToLeaderBoardWorker, getLeaderBoardWorker} from '@src/components/pages/Results/sagas/workers';

export default function* leaderBoardWatcher(){
    yield all([
        takeLatest(getLeaderBoard, getLeaderBoardWorker),
        takeLatest(addUserToLeaderBoardAction, addUserToLeaderBoardWorker)
    ]);
}
