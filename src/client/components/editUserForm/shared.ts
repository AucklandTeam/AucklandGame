import { EditUserDataForm } from './types'
import { TextInputProps } from 'components/inputs'

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
        title: 'login',
        validType: 'login',
    },
    {
        name: 'email',
        type: 'text',
        title: 'email',
        validType: 'email',
    },
    {
        name: 'phone',
        type: 'text',
        isHide: true,
    },
]
export const initialState = {
    first_name: '',
    second_name: '',
    display_name: '',
    email: '',
    login: '',
    phone: '89991112233',
}
