import { ID, SuccessResponse, User } from 'shared/types'
import { request } from 'src/api/request'
import { ENDPOINTS } from 'shared/consts'
import { LoginForm } from 'pages/Auth/SignIn/types'
import { SignUpForm } from 'pages/Auth/SignUp/types'
import { OAuthYandex, ServiceID } from "src/core/ducks/auth/types";

export const loginRequest = request<SuccessResponse, LoginForm>({
	method: 'POST',
	url: ENDPOINTS.AUTH.SIGNIN
})

export const getUserRequest = request<User>({
	method: 'GET',
	url: ENDPOINTS.AUTH.USER
})

export const signUpRequest = request<ID, SignUpForm>({
	method: 'POST',
	url: ENDPOINTS.AUTH.SIGNUP
})

export const logoutRequest = request<SuccessResponse>({
	method: 'POST',
	url: ENDPOINTS.AUTH.LOGOUT
})

export const getAuthYandexId = request<ServiceID>({method: 'GET', url: ENDPOINTS.AUTH.OAUTH});

export const authWithYandex = request<SuccessResponse, OAuthYandex>({method: 'POST', url: ENDPOINTS.AUTH.OAUTH_LOGIN});
