import React, { useEffect } from 'react'
import useForm from 'src/hooks/useForm'
import TextInput from 'src/components/elements/Inputs/TextInput'
import Form from 'src/components/elements/Form'
import { initialState, TextFieldsEditUser } from './shared'
import { EditUserDataForm } from './types'
import { useUserInfo } from 'src/components/pages/Auth/selectors'
import { useAppDispatch } from 'src/index'
import { editUser } from 'src/components/pages/ProfileEdit/actions'

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
						value={values[name]}
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
