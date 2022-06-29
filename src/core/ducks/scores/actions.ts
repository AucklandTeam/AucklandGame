import { createAction } from 'redux-actions'
import { LoadStatus, Nullable } from 'shared/types'
import { UserLeaderBoard } from './types'

export const getLeaderBoard = createAction('leaderBoard/getLeaderBoard')

export const addUserToLeaderBoardAction = createAction<number>('leaderBoard/addUserToLeaderBoard')

export enum leaderBoardActions {
    setLeaderBoardSuccess = 'leaderBoard/setLeaderBoardSuccess',
    setLeaderBoardFailed = 'leaderBoard/setLeaderBoardFailed',
    setLeaderBoardStatus = 'leaderBoard/setLeaderBoardStatus',
}

export const setLeaderBoardStatus = createAction<LoadStatus>(leaderBoardActions.setLeaderBoardStatus)

export const seLeaderBoardData = createAction<Nullable<UserLeaderBoard[]>>(leaderBoardActions.setLeaderBoardSuccess)

export const setLeaderBoardFailed = createAction<string>(leaderBoardActions.setLeaderBoardFailed)
