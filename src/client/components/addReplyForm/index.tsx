import React, { FC, FormEvent, useState } from 'react'
import Form from 'src/client/components/form'
import TextInput from 'src/client/components/Inputs'
import { useAppDispatch } from 'src/ssr'
import useForm from 'src/hooks/useForm'
import { AddReplyFormProps } from './types'
import { initialState } from './shared'
import TextArea from 'components/textArea';

const AddReplyForm: FC = () => {
    //const dispatch = useAppDispatch()
    const authorName = 'var_user.login'
    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        formError,
        setFormError,
        setFieldValue
    } = useForm<AddReplyFormProps>({
        initialState,
        onSubmit: values => {
            if (!isValid) return
        }
    })

    return (
        <>
            <div>From: {authorName}</div>
            <Form
                handleSubmit={handleSubmit}
                submitTitle={'Send'}
                errorText={formError}
            >
                <TextInput
                    title={'Message Title'}
                    type={'text'}
                    name={'messageTitle'}
                    value={values['messageTitle' as keyof AddReplyFormProps]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isRequired={false}
                />
                <TextArea
                    name={'messageText'}
                    title={'Your text here...'}
                    value={values['messageText' as keyof AddReplyFormProps]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    validType={'text'}
                />
                <TextInput
                    title={'Message Author'}
                    type={'hidden'}
                    name={'messageAuthor'}
                    value={values['messageAuthor' as keyof AddReplyFormProps]}
                />
            </Form>
        </>
    )
}

export default AddReplyForm
