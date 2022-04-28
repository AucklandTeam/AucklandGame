import {ActionWithPayload, GenerateState, LoadStatus, ParamForFormRequest, User} from 'src/shared/types';
import {userActions} from 'src/components/pages/Auth/actions';
import {EditUserDataForm} from 'src/components/elements/EditUserForm/types';
import {UploadAvatarForm} from '../../elements/AvatarUploadForm';

export type UserState = GenerateState<User>;

export type UserActionStatus =
    ActionWithPayload<Extract<typeof userActions, userActions.setUserSuccess>, LoadStatus>;

export type UserActionData = ActionWithPayload<Extract<typeof userActions, 'setUserStatus'>, User>;

export type UserActions = UserActionStatus | UserActionData;

export type ParamEditUser = EditUserDataForm & ParamForFormRequest;

export type ParamChangeAvatar = UploadAvatarForm & ParamForFormRequest;

