import { TextInputProps } from 'components/inputs'
import { LoginForm } from './types'

export const TextFieldsLogin: TextInputProps<keyof LoginForm>[] = [
	{
		name: 'login',
		type: 'text',
		title: 'Login',
		validType: 'login'
	},
	{
		name: 'password',
		type: 'password',
		title: 'Password',
		validType: 'password'
	}
]

export const initialState = {
	login: '',
	password: ''
}
