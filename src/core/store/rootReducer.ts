import { combineReducers } from 'redux'
import { userReducer } from 'src/core/ducks/auth/reducer'

export const rootReducer = combineReducers({
	user: userReducer
})
