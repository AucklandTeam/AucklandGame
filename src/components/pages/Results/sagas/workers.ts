import {SagaIterator} from 'redux-saga';
import {call, put, select} from '@redux-saga/core/effects';
import {addUserToLeaderBoard, getAllLeaderBoard} from '@src/components/pages/Results/api';
import {fieldRating, ResponseLeaderBoardList, teamName} from '@src/components/pages/Results/types';
import {
    addUserToLeaderBoardAction, seLeaderBoardData,
    setLeaderBoardFailed,
    setLeaderBoardStatus
} from '@src/components/pages/Results/actions';
import {userSelector} from '@src/components/pages/Auth/selectors';

export function* getLeaderBoardWorker():SagaIterator<void>{
    yield put(setLeaderBoardStatus('pending'));
    try {
        const response:ResponseLeaderBoardList = yield call(getAllLeaderBoard, {cursor: 0, limit:2, ratingFieldName: fieldRating});
        yield put(seLeaderBoardData(response.map(({data})=>({...data}))));
        yield put(setLeaderBoardStatus('success'));
    }catch (e) {
        yield put(setLeaderBoardStatus('failed'));
        // @ts-ignore
        yield put(setLeaderBoardFailed(e.reason));
    }
}

export function* addUserToLeaderBoardWorker({payload}:ReturnType<typeof addUserToLeaderBoardAction>):SagaIterator<void>{
    try {
        const {data: user} = yield select(userSelector);
        if(user){
            yield call(addUserToLeaderBoard, {
                data: {
                    login: user.login,
                    aucklandScope: payload,
                },
                ratingFieldName: fieldRating,
                teamName: teamName,
            });
        }

    }catch (e) {
        console.error(e);
    }
}
