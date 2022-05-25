import React, { useEffect } from 'react'
import useForm from 'src/hooks/useForm'
import TextInput from 'components/inputs'
import Form from 'components/form'
import { initialState, TextFieldsEditUser } from './shared'
import { EditUserDataForm } from './types'
import { useUserInfo } from 'pages/Auth/selectors'
import { useAppDispatch } from 'src/client/App'
import { editUser } from 'pages/ProfileEdit/actions'

const EditUserData = () => {
	const { data } = useUserInfo()
	const dispatch = useAppDispatch()
	const {
		values,
		handleChange,
		handleBlur,
		handleSubmit,
		isValid,
		formError,
		setFormError,
		setFieldValue
	} = useForm<EditUserDataForm>({
		initialState,
		onSubmit: values => {
			if (!isValid) return
			dispatch(editUser({ ...values, setFormError }))
		}
	})

	useEffect(() => {
		setFieldValue('login', data?.login || '')
		setFieldValue('email', data?.email || '')
	}, [data])

	return (
		<Form handleSubmit={handleSubmit} submitTitle={'Save Changes'} errorText={formError}>
			{TextFieldsEditUser.filter(({ isHide }) => !isHide).map(
				({ name, type, title, validType }) => (
					<TextInput
						key={name}
						title={title}
						type={type}
						name={name}
						value={values[name as keyof EditUserDataForm]}
						validType={validType}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				)
			)}
		</Form>
	)
}

export default EditUserData