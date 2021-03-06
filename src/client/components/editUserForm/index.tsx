import React, { useEffect } from 'react'
import useForm from 'src/hooks/useForm'
import TextInput from '../inputs'
import Form from '../form'
import { initialState, TextFieldsEditUser } from './shared'
import { EditUserDataForm } from './types'
import { useUserInfo } from 'src/core/ducks/auth/selectors'
import { editUser } from 'src/core/ducks/profile/actions'
import { useAppDispatch } from 'src/ssr'
import { useTranslation } from 'react-i18next'

const EditUserData = () => {
    const { data } = useUserInfo()
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const { values, handleChange, handleBlur, handleSubmit, isValid, formError, setFormError, setFieldValue } =
        useForm<EditUserDataForm>({
            initialState,
            onSubmit: values => {
                if (!isValid) return
                dispatch(editUser({ ...values, setFormError }))
            },
        })

    useEffect(() => {
        setFieldValue('login', data?.login || '')
        setFieldValue('email', data?.email || '')
    }, [data])

    return (
        <Form
            handleSubmit={handleSubmit}
            submitTitle={t('saveChanges')}
            errorText={formError}
        >
            {TextFieldsEditUser.filter(({ isHide }) => !isHide).map(({ name, type, title, validType }) => (
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
            ))}
        </Form>
    )
}

export default EditUserData
