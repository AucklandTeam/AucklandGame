import { ChangePasswordForm } from './types'
import { TextInputProps } from 'src/components/elements/Inputs/TextInput'

export const TextFieldsChangePassword: TextInputProps<keyof ChangePasswordForm>[] = [
	{
		name: 'oldPassword',
		type: 'password',
		title: 'Old Password',
		validType: 'password'
	},
	{
		name: 'newPassword',
		type: 'password',
		title: 'New Password',
		validType: 'password'
	},
	{
		name: 'newPasswordConfirm',
		type: 'password',
		title: 'Confirm Password',
		validType: 'password'
	}
]

export const initialState: ChangePasswordForm = {
	oldPassword: '',
	newPassword: '',
	newPasswordConfirm: ''
}
