import { EditUserDataForm } from './types';
import { TextInputProps } from 'src/components/elements/Inputs/TextInput';

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
        title: 'Login',
        validType: 'login',
    },
    {
        name: 'email',
        type: 'text',
        title: 'E-mail',
        validType: 'email',
    },
    {
        name: 'phone',
        type: 'text',
        isHide: true,
    },
];
export const initialState = {
    first_name: '',
    second_name: '',
    display_name: '',
    email: '',
    login: '',
    phone: '89991112233',
};

