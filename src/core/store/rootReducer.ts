import { combineReducers } from 'redux'
import { userReducer } from 'src/core/ducks/auth/reducer'
import {leaderBoardReducer} from "pages/Scores/reducer";

export const rootReducer = combineReducers({
	user: userReducer,
	leaderBoard: leaderBoardReducer,
})
