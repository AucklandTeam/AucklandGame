import React, { FC, MutableRefObject } from 'react'
import Form from 'src/client/components/form'
import TextInput from 'src/client/components/inputs'
import { useAppDispatch } from 'src/ssr'
import useForm from 'src/hooks/useForm'
import { NewTopicForm } from './types'
import { addTopicAction } from 'src/core/ducks/forum/actions'
import { useTranslation } from 'react-i18next'

type AddNewTopicFormProps = {
    categoryId: number
    modalRef: MutableRefObject<null>
}

const AddNewTopicForm: FC<AddNewTopicFormProps> = ({ categoryId, modalRef }) => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const { values, handleChange, handleBlur, handleSubmit, isValid, formError } = useForm<NewTopicForm>({
        initialState: {
            categoryId,
            label: '',
        },
        onSubmit: values => {
            if (!isValid) return
            dispatch(addTopicAction(values))
            ;(modalRef as MutableRefObject<any>).current.close()
        },
    })

    return (
        <>
            <h4>{t('addTopic')}</h4>
            <Form
                handleSubmit={handleSubmit}
                submitTitle={t('create')}
                errorText={formError}
            >
                <TextInput
                    title={t('newTopicTitle')}
                    type={'text'}
                    name={'label'}
                    value={values['label' as keyof NewTopicForm]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    validType={'text'}
                />
            </Form>
        </>
    )
}

export default AddNewTopicForm
