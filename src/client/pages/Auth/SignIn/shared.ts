import { TextInputProps } from 'components/inputs'
import { LoginForm } from './types'

export const TextFieldsLogin: TextInputProps<keyof LoginForm>[] = [
    {
        name: 'login',
        type: 'text',
        title: 'login',
        validType: 'login',
    },
    {
        name: 'password',
        type: 'password',
        title: 'password',
        validType: 'password',
    },
]
