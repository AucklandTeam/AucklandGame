import {TextField} from 'src/shared/types';
import { SignUpForm } from './types';

export const TextFieldsSignUp: TextField<keyof SignUpForm>[] = [
    {
        name: 'first_name',
        type: 'text',
        isHide: true,
    },
    {
        name: 'second_name',
        type: 'text',
        isHide: true,
    },
    {
        name: 'login',
        type: 'text',
    },
    {
        name: 'email',
        type: 'text',
    },
    {
        name: 'phone',
        type: 'text',
        isHide: true,
    },
    {
        name: 'password',
        type: 'password',
    },
    {
        name: 'confirm',
        type: 'password',
    },
];

export const initialState: SignUpForm = {
    first_name: '',
    second_name: '',
    email: '',
    login: '',
    phone:'89991112233',
    password:'',
    confirm:'',
};
