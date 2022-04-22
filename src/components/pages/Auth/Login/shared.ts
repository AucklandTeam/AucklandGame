import {TextInputProps} from 'src/components/elements/Inputs/TextInput';
import {LoginForm} from './types';

export const TextFieldsLogin: TextInputProps<keyof LoginForm>[] = [
    {
        name: 'login',
        type: 'text',
        title: 'Login'
    },
    {
        name: 'password',
        type: 'password',
        title: 'Password'
    },
];

export const initialState = {
    login: '',
    password: '',
};
