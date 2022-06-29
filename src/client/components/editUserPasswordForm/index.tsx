import React, { useState } from 'react'
import useForm from 'src/hooks/useForm'
import TextInput from '../inputs'
import Form from '../form'
import { initialState, TextFieldsChangePassword } from './shared'
import { changeUserPasswordRequest } from 'src/core/ducks/profile/api'
import { ChangePasswordForm } from './types'
import { useTranslation } from 'react-i18next'

const EditUserPassword = () => {
    const { t } = useTranslation()
    const [formError, setFormError] = useState('')
    const { values, handleChange, handleBlur, handleSubmit, isValid } = useForm<ChangePasswordForm>({
        initialState,
        onSubmit: values => {
            if (isValid) {
                changeUserPasswordRequest(values)
                    .then((res: any) => {
                        console.log(res)
                    })
                    .catch((error: { reason: React.SetStateAction<string> }) => {
                        setFormError(error.reason)
                    })
            }
        },
    })
    return (
        <Form
            handleSubmit={handleSubmit}
            submitTitle={t('changePassword')}
            errorText={formError}
        >
            {TextFieldsChangePassword.map(({ name, type, title }) => (
                <TextInput
                    key={name}
                    title={title}
                    type={type}
                    name={name}
                    value={values[name as keyof ChangePasswordForm]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            ))}
        </Form>
    )
}

export default EditUserPassword
