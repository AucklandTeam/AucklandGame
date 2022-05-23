import {createAction} from 'redux-actions';
import {LoadStatus, Nullable, User} from 'src/shared/types';
import {OAuthYandex, ParamSignIn, ParamSignUp} from './types';

export const fetchUser = createAction('user/fetchUser');

export const login = createAction('user/login');

export const signIn = createAction<ParamSignIn>('user/signIn');

export const signUp = createAction<ParamSignUp>('user/signUp');

export const logout = createAction('user/logout');

export const authYandexGetServiceID = createAction('user/authYandexGetServiceID');

export const authYandexLogin = createAction<OAuthYandex>('user/authYandexLogin');

export enum userActions {
    setUserSuccess = 'user/setUserSuccess',
    setUserFailed = 'user/setUserFailed',
    setUserStatus = 'user/setUserStatus',
}

export const setUserStatus = createAction<LoadStatus>
(userActions.setUserStatus);

export const setUserData = createAction<Nullable<User>>(userActions.setUserSuccess);

export const setUserFailed = createAction<string>(userActions.setUserFailed);
