import {ActionWithPayload, GenerateState, LoadStatus} from '@src/shared/types';
import {leaderBoardActions} from '@src/components/pages/Results/actions';

export const teamName = 'AucklandTeam';
export const fieldRating = 'aucklandScope';

export type UserLeaderBoard = {
    login: string;
    aucklandScope: number;
}

export type ParamLeaderBoardAddUser = {
    data: UserLeaderBoard;
    teamName: string;
    ratingFieldName: string;
}
export type ParamLeaderBoardGet = {
    ratingFieldName: string;
    cursor: number;
    limit: number;
}

export type ResponseLeaderBoardList = {
    data: UserLeaderBoard;
}[]

export type LeaderBoardState = GenerateState<UserLeaderBoard[]>;

export type LeaderBoardActionStatus =
    ActionWithPayload<Extract<typeof leaderBoardActions, leaderBoardActions.setLeaderBoardSuccess>, LoadStatus>;

export type LeaderBoardActionData = ActionWithPayload<Extract<typeof leaderBoardActions, 'setLeaderBoardSuccess'>, UserLeaderBoard[]>;

export type LeaderBoardActions = LeaderBoardActionStatus | LeaderBoardActionData;
