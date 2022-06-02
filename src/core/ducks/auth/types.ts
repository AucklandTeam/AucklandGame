import {
	ActionWithPayload,
	GenerateState,
	LoadStatus,
	ParamForFormRequest,
	User
} from 'shared/types'
import { userActions } from './actions'
import { LoginForm } from 'pages/Auth/SignIn/types'
import { SignUpForm } from 'pages/Auth/SignUp/types'

export type UserState = GenerateState<User>

export type UserActionStatus = ActionWithPayload<
	Extract<typeof userActions, userActions.setUserSuccess>,
	LoadStatus
>

export type UserActionData = ActionWithPayload<
	Extract<typeof userActions, 'setUserStatus'>,
	User
>

export type UserActions = UserActionStatus | UserActionData

export type ParamSignIn = LoginForm & ParamForFormRequest

export type ParamSignUp = SignUpForm & ParamForFormRequest

export type ServiceID = {
	service_id: string
}

export type OAuthYandex = {
	code: string
	redirect_uri: string
}
