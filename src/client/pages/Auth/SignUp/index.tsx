import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import useForm from 'src/hooks/useForm'
import { SignUpForm } from './types'
import { initialState, TextFieldsSignUp } from './shared'
import TextInput from 'src/client/components/Inputs'
import Form from 'src/client/components/form'
import { RouterPath } from 'shared/consts'
import HomePageWrap from 'src/client/components/homePageWrap'
import { signUp } from 'src/core/ducks/auth/actions'
import { useAppDispatch } from 'src/ssr'

const SignUp: FC = () => {
	const dispatch = useAppDispatch()
	const {
		values,
		handleChange,
		handleBlur,
		handleSubmit,
		isValid,
		formError,
		setFormError
	} = useForm<SignUpForm>({
		initialState,
		onSubmit: values => {
			if (!isValid) return
			dispatch(signUp({ ...values, setFormError }))
		}
	})
	return (
		<HomePageWrap titleContent={'Registration'}>
			<Form
				handleSubmit={handleSubmit}
				submitTitle={'Welcome aboard!'}
				errorText={formError}
			>
				{TextFieldsSignUp.filter(({ isHide }) => !isHide).map(
					({ name, type, title, validType }) => (
						<TextInput
							key={name}
							title={title}
							type={type}
							name={name}
							validType={validType}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values[name as keyof SignUpForm]}
						/>
					)
				)}
			</Form>
			<Link to={RouterPath.SignIn}>Have account already?</Link>
		</HomePageWrap>
	)
}

export default SignUp
