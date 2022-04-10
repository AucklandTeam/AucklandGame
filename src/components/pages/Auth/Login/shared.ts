import {TextField} from '../../../../shared/types';
import {LoginForm} from './types';

export const TextFieldsLogin: TextField<keyof LoginForm>[] = [
    {
        name: 'login',
        type: 'text',
    },
    {
        name: 'password',
        type: 'password',
    },
];

export const initialState = {
    login: '',
    password: '',
};
