import { combineReducers } from 'redux'
import { userReducer } from 'src/core/ducks/auth/reducer'
import { leaderBoardReducer } from 'src/core/ducks/scores/reducer'

export const rootReducer = combineReducers({
	user: userReducer,
	leaderBoard: leaderBoardReducer
})
