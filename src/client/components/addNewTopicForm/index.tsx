import React, { FC, FormEvent, useState } from 'react'
import Form from 'src/client/components/form'
import TextInput from 'src/client/components/Inputs'
import { useAppDispatch } from 'src/ssr'
import useForm from 'src/hooks/useForm'
import { NewTopicForm } from './types'
import { initialState } from './shared'
import TextArea from 'components/textArea';

const AddNewTopicForm: FC = () => {
	//const dispatch = useAppDispatch()
	const {
		values,
		handleChange,
		handleBlur,
		handleSubmit,
		isValid,
		formError,
		setFormError,
		setFieldValue
	} = useForm<NewTopicForm>({
		initialState,
		onSubmit: values => {
			if (!isValid) return
		}
	})

	return (
		<>
			<h4>Add New Topic</h4>
			<Form
				handleSubmit={handleSubmit}
				submitTitle={'Create'}
				errorText={formError}
			>
				<TextInput
					title={'New Topic Title'}
					type={'text'}
					name={'topicTitle'}
					value={values['topicTitle' as keyof NewTopicForm]}
					onChange={handleChange}
					onBlur={handleBlur}
					data-vtype={'text'}
				/>
				<TextArea
					name={'topicText'}
					title={'Your text here...'}
					value={values['topicText' as keyof NewTopicForm]}
					onChange={handleChange}
					onBlur={handleBlur}
					data-vtype={'text'}
				/>
			</Form>
		</>
	)
}

export default AddNewTopicForm
