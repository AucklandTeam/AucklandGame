import React, { FC, MutableRefObject } from 'react'
import Form from 'src/client/components/form'
import TextInput from 'src/client/components/Inputs'
import { useAppDispatch } from 'src/ssr'
import useForm from 'src/hooks/useForm'
import { NewTopicForm } from './types'
import { addTopicAction } from 'src/core/ducks/forum/actions'

type AddNewTopicFormProps = {
	categoryId: number
	modalRef: MutableRefObject<null>
}

const AddNewTopicForm: FC<AddNewTopicFormProps> = ({
	categoryId,
	modalRef
}) => {
	const dispatch = useAppDispatch()
	const {
		values,
		handleChange,
		handleBlur,
		handleSubmit,
		isValid,
		formError
	} = useForm<NewTopicForm>({
		initialState: {
			categoryId,
			label: ''
		},
		onSubmit: values => {
			if (!isValid) return
			dispatch(addTopicAction(values))
			;(modalRef as MutableRefObject<any>).current.close()
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
