import {request} from '@src/api/request';
import {SuccessResponse} from '@src/shared/types';
import {ENDPOINTS} from '@src/shared/consts';
import {
    ParamLeaderBoardAddUser,
    ParamLeaderBoardGet, ResponseLeaderBoardList,
} from '@src/components/pages/Results/types';

export const addUserToLeaderBoard = request<SuccessResponse,ParamLeaderBoardAddUser>({method:'POST', url: ENDPOINTS.LEADERBOARD.ADD_USER});

export const getAllLeaderBoard = request<ResponseLeaderBoardList, ParamLeaderBoardGet>({method:'POST', url: ENDPOINTS.LEADERBOARD.GET_ALL});

export const getTeamLeaderBoard = request<ResponseLeaderBoardList, ParamLeaderBoardGet>({method:'POST', url: ENDPOINTS.LEADERBOARD.GET_TEAM});

