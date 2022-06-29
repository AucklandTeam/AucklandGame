import React, { FC, FormEvent, useState } from 'react'
import Form from 'src/client/components/form'
import TextInput from 'src/client/components/inputs'
import { changeAvatar } from 'src/core/ducks/profile/actions'
import { useAppDispatch } from 'src/ssr'
import { useTranslation } from 'react-i18next'

export type UploadAvatarForm = {
    formData?: FormData
}

const UploadAvatar: FC<UploadAvatarForm> = () => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const [formError, setFormError] = useState('')
    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement
        const formData = new FormData(form)
        dispatch(changeAvatar({ formData, setFormError }))
    }

    return (
        <>
            <h4>{t('uploadAvatar')}</h4>
            <Form
                handleSubmit={onSubmit}
                submitTitle={t('upload')}
                errorText={formError}
            >
                <TextInput
                    type={'file'}
                    name={'avatar'}
                />
            </Form>
        </>
    )
}

export default UploadAvatar
