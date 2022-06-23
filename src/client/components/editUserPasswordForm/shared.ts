import { ChangePasswordForm } from './types'
import { TextInputProps } from 'components/inputs'

export const TextFieldsChangePassword: TextInputProps<
	keyof ChangePasswordForm
>[] = [
	{
		name: 'oldPassword',
		type: 'password',
		title: 'oldPassword',
		validType: 'password'
	},
	{
		name: 'newPassword',
		type: 'password',
		title: 'newPassword',
		validType: 'password'
	},
	{
		name: 'newPasswordConfirm',
		type: 'password',
		title: 'confirmPassword',
		validType: 'password'
	}
]

export const initialState: ChangePasswordForm = {
	oldPassword: '',
	newPassword: '',
	newPasswordConfirm: ''
}
