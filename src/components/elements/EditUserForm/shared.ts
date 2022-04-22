import { EditUserDataForm } from './types';
import {TextInputProps} from "../Inputs/TextInput";

export const TextFieldsEditUser: TextInputProps<keyof EditUserDataForm>[] = [
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
        name: 'display_name',
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
    }
];

export const initialState: EditUserDataForm = {
    first_name: '',
    second_name: '',
    display_name: '',
    email: 'gamer12@info.net',
    login: 'gamer12',
    phone:'89991112233',
};