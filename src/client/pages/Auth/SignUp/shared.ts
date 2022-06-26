import { TextInputProps } from 'components/inputs'
import { SignUpForm } from './types'

export const TextFieldsSignUp: TextInputProps<keyof SignUpForm>[] = [
	{
		name: 'first_name',
		type: 'text',
		isHide: true
	},
	{
		name: 'second_name',
		type: 'text',
		isHide: true
	},
	{
		name: 'login',
		type: 'text',
		title: 'login',
		validType: 'login'
	},
	{
		name: 'email',
		type: 'text',
		title: 'email',
		validType: 'email'
	},
	{
		name: 'phone',
		type: 'text',
		isHide: true
	},
	{
		name: 'password',
		type: 'password',
		title: 'choosePassword',
		validType: 'password'
	},
	{
		name: 'confirm',
		type: 'password',
		title: 'choosePassword',
		validType: 'password'
	}
]

export const initialState: SignUpForm = {
	first_name: '',
	second_name: '',
	email: '',
	login: '',
	phone: '89991112233',
	password: '',
	confirm: ''
}
