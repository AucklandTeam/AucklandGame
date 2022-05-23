import {ID, SuccessResponse, User} from 'src/shared/types';
import {request} from 'src/api/request';
import { LoginForm } from './Login/types';
import {ENDPOINTS} from 'src/shared/consts';
import {SignUpForm} from './SignUp/types';
import {OAuthYandex, ServiceID} from './types';

export const loginRequest = request<SuccessResponse, LoginForm>({method: 'POST', url: ENDPOINTS.AUTH.SIGNIN});

export const getUserRequest = request<User>({method: 'GET', url: ENDPOINTS.AUTH.USER});

export const signUpRequest = request<ID, SignUpForm>({method: 'POST', url: ENDPOINTS.AUTH.SIGNUP});

export const logoutRequest = request<SuccessResponse>({method:'POST', url: ENDPOINTS.AUTH.LOGOUT});

export const getAuthYandexId = request<ServiceID>({method: 'GET', url: ENDPOINTS.AUTH.OAUTH});

export const authWithYandex = request<SuccessResponse, OAuthYandex>({method: 'POST', url: ENDPOINTS.AUTH.OAUTH_LOGIN});
