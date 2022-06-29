import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import useForm from 'src/hooks/useForm'
import { LoginForm } from './types'
import TextInput from 'components/inputs'
import Form from 'components/form'
import { RouterPath } from 'shared/consts'
import HomePageWrap from 'components/homePageWrap'
import { signIn } from 'src/core/ducks/auth/actions'
import { useAppDispatch } from 'src/ssr'
import { PageMeta } from 'components/pageMeta'
import { useTranslation } from 'react-i18next'
import { TextFieldsLogin } from 'pages/Auth/SignIn/shared'

const Login: FC = () => {
    const dispatch = useAppDispatch()
    const { values, handleChange, handleBlur, handleSubmit, isValid, setFormError, formError } = useForm<LoginForm>({
        initialState: {
            login: '',
            password: '',
        },
        onSubmit: values => {
            console.log(isValid)
            if (!isValid) return
            dispatch(signIn({ ...values, setFormError }))
        },
    })

    const { t } = useTranslation()

    return (
        <HomePageWrap titleContent={t('signIn')}>
            <PageMeta
                title={`${t('signIn')} | ${t('gameTitle')}`}
                description={t('gameDescription')}
            />
            <Form
                handleSubmit={handleSubmit}
                submitTitle={t('letsShoot')}
                errorText={formError}
            >
                {TextFieldsLogin.map(({ name, type, title, validType }) => (
                    <TextInput
                        id={name}
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
            <Link to={RouterPath.SignUp}>{t('noAccount')}</Link>
            <Link
                style={{ width: '100%', textAlign: 'center' }}
                to={RouterPath.SignYandex}
            >
                {t('signYandex')}
            </Link>
        </HomePageWrap>
    )
}

export default Login
