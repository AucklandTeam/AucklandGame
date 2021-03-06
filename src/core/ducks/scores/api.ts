import { request } from 'src/api/request'
import { ENDPOINTS } from 'shared/consts'
import { SuccessResponse } from 'shared/types'
import { ParamLeaderBoardAddUser, ParamLeaderBoardGet, ResponseLeaderBoardList } from './types'

export const addUserToLeaderBoard = request<SuccessResponse, ParamLeaderBoardAddUser>({
    method: 'POST',
    url: ENDPOINTS.LEADERBOARD.ADD_USER,
})

export const getAllLeaderBoard = request<ResponseLeaderBoardList, ParamLeaderBoardGet>({
    method: 'POST',
    url: ENDPOINTS.LEADERBOARD.GET_ALL,
})

export const getTeamLeaderBoard = request<ResponseLeaderBoardList, ParamLeaderBoardGet>({
    method: 'POST',
    url: ENDPOINTS.LEADERBOARD.GET_TEAM,
})
