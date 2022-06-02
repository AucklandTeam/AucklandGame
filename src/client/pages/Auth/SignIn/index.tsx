import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import useForm from 'src/hooks/useForm'
import { LoginForm } from './types'
import TextInput from 'components/inputs'
import { initialState, TextFieldsLogin } from './shared'
import Form from 'components/form'
import { RouterPath } from 'shared/consts'
import HomePageWrap from 'components/homePageWrap'
import { signIn } from 'src/core/ducks/auth/actions'
import { useDispatch } from 'react-redux'

const Login: FC = () => {
	const dispatch = useDispatch()
	const {
		values,
		handleChange,
		handleBlur,
		handleSubmit,
		isValid,
		setFormError,
		formError
	} = useForm<LoginForm>({
		initialState,
		onSubmit: values => {
			console.log(isValid)
			if (!isValid) return
			dispatch(signIn({ ...values, setFormError }))
		}
	})

	return (
		<HomePageWrap titleContent={'Sign In'}>
			<Form
				handleSubmit={handleSubmit}
				submitTitle={'Let’s shoot!'}
				errorText={formError}
			>
				{TextFieldsLogin.map(({ name, type, title, validType }) => (
					<TextInput
						key={name}
						title={title}
						type={type}
						name={name}
						validType={validType}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values[name as keyof LoginForm]}
					/>
				))}
			</Form>
			<Link to={RouterPath.SignUp}>No account yet?</Link>
			<Link
				style={{ width: '100%', textAlign: 'center' }}
				to={RouterPath.SignYandex}
			>
				Sign via Yandex?
			</Link>
		</HomePageWrap>
	)
}

export default Login
