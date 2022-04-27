import {ActionWithPayload, GenerateState, LoadStatus, ParamForFormRequest, User} from 'src/shared/types';
import {userActions} from './actions';
import {LoginForm} from './Login/types';
import {SignUpForm} from './SignUp/types';

export type UserState = GenerateState<User>;

export type UserActionStatus =
    ActionWithPayload<Extract<typeof userActions, userActions.setUserSuccess>, LoadStatus>;

export type UserActionData = ActionWithPayload<Extract<typeof userActions, 'setUserStatus'>, User>;

export type UserActions = UserActionStatus | UserActionData;

export type ParamSignIn = LoginForm & ParamForFormRequest;

export type ParamSignUp = SignUpForm & ParamForFormRequest;

