import React, { FC, FormEvent, useState } from 'react'
import Form from 'components/form'
import TextInput from 'components/inputs'
import { changeAvatar } from 'src/core/ducks/profile/actions'
import { useDispatch } from 'react-redux';

export type UploadAvatarForm = {
	formData?: FormData
}

const UploadAvatar: FC<UploadAvatarForm> = () => {
	const dispatch = useDispatch()
	const [formError, setFormError] = useState('')
	const onSubmit = (event: FormEvent) => {
		event.preventDefault()
		const form = event.target as HTMLFormElement
		const formData = new FormData(form)
		dispatch(changeAvatar({ formData, setFormError }))
	}

	return (
		<>
			<h4>Upload Avatar</h4>
			<Form
				handleSubmit={onSubmit}
				submitTitle={'Upload'}
				errorText={formError}
			>
				<TextInput type={'file'} name={'avatar'} />
			</Form>
		</>
	)
}

export default UploadAvatar
