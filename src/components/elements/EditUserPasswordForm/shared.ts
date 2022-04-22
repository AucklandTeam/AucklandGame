import { ChangePasswordForm } from './types';
import { TextInputProps } from 'src/components/elements/Inputs/TextInput';

export const TextFieldsChangePassword: TextInputProps<keyof ChangePasswordForm>[] = [
    {
        name: 'oldPassword',
        type: 'password',
        title: 'Old Password',
    },
    {
        name: 'newPassword',
        type: 'password',
        title: 'New Password',
    },
    {
        name: 'newPasswordConfirm',
        type: 'password',
        title: 'Confirm Password',
    },
];

export const initialState: ChangePasswordForm = {
    oldPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
};
