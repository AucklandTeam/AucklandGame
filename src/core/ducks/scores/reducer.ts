import {LeaderBoardActions, LeaderBoardState} from "src/core/ducks/scores/types";
import { leaderBoardActions } from "./actions";

export const initialState:LeaderBoardState = {
    data: null,
    error: '',
    status: 'default',
};

export const leaderBoardReducer = (state = initialState, action: LeaderBoardActions)=>{
    switch (action.type){
        case leaderBoardActions.setLeaderBoardSuccess:
            return {
                ...state,
                data: action.payload,
            };
        case leaderBoardActions.setLeaderBoardStatus:
            return {
                ...state,
                status: action.payload,
            };
        case leaderBoardActions.setLeaderBoardFailed:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
