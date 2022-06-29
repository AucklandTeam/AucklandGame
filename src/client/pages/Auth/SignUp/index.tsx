import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import useForm from 'src/hooks/useForm'
import { SignUpForm } from './types'
import { initialState, TextFieldsSignUp } from './shared'
import TextInput from 'src/client/components/inputs'
import Form from 'src/client/components/form'
import { RouterPath } from 'shared/consts'
import HomePageWrap from 'src/client/components/homePageWrap'
import { signUp } from 'src/core/ducks/auth/actions'
import { useAppDispatch } from 'src/ssr'
import { PageMeta } from 'components/pageMeta'
import { useTranslation } from 'react-i18next'

const SignUp: FC = () => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation()

    const { values, handleChange, handleBlur, handleSubmit, isValid, formError, setFormError } = useForm<SignUpForm>({
        initialState,
        onSubmit: values => {
            if (!isValid) return
            dispatch(signUp({ ...values, setFormError }))
        },
    })

    return (
        <HomePageWrap titleContent={t('signUp')}>
            <PageMeta
                title={`${t('signUp')} | ${t('gameTitle')}`}
                description={t('gameDescription')}
            />
            <Form
                handleSubmit={handleSubmit}
                submitTitle={t('welcomeAboard')}
                errorText={formError}
            >
                {TextFieldsSignUp.filter(({ isHide }) => !isHide).map(({ name, type, title, validType }) => (
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
                ))}
            </Form>
            <Link to={RouterPath.SignIn}>{t('haveAccount')}</Link>
        </HomePageWrap>
    )
}

export default SignUp
