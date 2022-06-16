import React, { FC } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import useForm from 'src/hooks/useForm'
import { LoginForm } from './types'
import TextInput from 'src/client/components/Inputs'
import { initialState, TextFieldsLogin } from './shared'
import Form from 'src/client/components/form'
import { RouterPath } from 'shared/consts'
import HomePageWrap from 'src/client/components/homePageWrap'
import { signIn } from 'src/core/ducks/auth/actions'
import { useAppDispatch } from 'src/ssr'
import {PageMeta} from 'components/pageMeta';

const Login: FC = () => {
	const dispatch = useAppDispatch()
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
			<PageMeta
				title='Sign In | Destroy Asteroids'
				description='Game by Auckland Team on Yandex Practicum'
			/>
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
