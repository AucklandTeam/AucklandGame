import { UserActions, UserState } from './types'
import { userActions } from './actions'

const initialState: UserState = {
	data: null,
	error: '',
	status: 'default'
}

export const userReducer = (state = initialState, action: UserActions) => {
	switch (action.type) {
		case userActions.setUserSuccess:
			return {
				...state,
				data: action.payload
			}
		case userActions.setUserStatus:
			return {
				...state,
				status: action.payload
			}
		case userActions.setUserFailed:
			return {
				...state,
				error: action.payload
			}
		default:
			return state
	}
}
