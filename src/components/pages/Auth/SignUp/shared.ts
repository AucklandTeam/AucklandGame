import {TextInputProps} from 'src/components/elements/Inputs/TextInput';
import { SignUpForm } from './types';

export const TextFieldsSignUp: TextInputProps<keyof SignUpForm>[] = [
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
        title: 'Login'
    },
    {
        name: 'email',
        type: 'text',
        title: 'E-mail'
    },
    {
        name: 'phone',
        type: 'text',
        isHide: true,
    },
    {
        name: 'password',
        type: 'password',
        title: 'Choose Password'
    },
    {
        name: 'confirm',
        type: 'password',
        title: 'Confirm Password'
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
