import {ActionWithPayload, GenerateState, LoadStatus, ParamForFormRequest, User} from 'shared/types';
import {userActions} from 'pages/Auth/actions';
import {EditUserDataForm} from 'components/editUserForm/types';
import {UploadAvatarForm} from 'components/avatarUploadForm';

export type UserState = GenerateState<User>;

export type UserActionStatus =
    ActionWithPayload<Extract<typeof userActions, userActions.setUserSuccess>, LoadStatus>;

export type UserActionData = ActionWithPayload<Extract<typeof userActions, 'setUserStatus'>, User>;

export type UserActions = UserActionStatus | UserActionData;

export type ParamEditUser = EditUserDataForm & ParamForFormRequest;

export type ParamChangeAvatar = UploadAvatarForm & ParamForFormRequest;

