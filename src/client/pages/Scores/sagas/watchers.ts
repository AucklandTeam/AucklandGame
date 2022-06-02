import {all, takeLatest} from '@redux-saga/core/effects';

import {getLeaderBoard, addUserToLeaderBoardAction} from '../actions';
import {getLeaderBoardWorker, addUserToLeaderBoardWorker} from './workers';

export default function* leaderBoardWatcher(){
    yield all([
        takeLatest(getLeaderBoard, getLeaderBoardWorker),
        takeLatest(addUserToLeaderBoardAction, addUserToLeaderBoardWorker)
    ]);
}