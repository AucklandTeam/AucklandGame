import { combineReducers } from 'redux'
import { userReducer } from 'src/core/ducks/auth/reducer'
import { leaderBoardReducer } from 'src/core/ducks/scores/reducer'
import { forumReducer } from 'src/core/ducks/forum/reducer'

export const rootReducer = combineReducers({
    user: userReducer,
    leaderBoard: leaderBoardReducer,
    forum: forumReducer,
})
