import React, { FC } from 'react'
import Form from 'src/client/components/form'
import TextInput from 'src/client/components/Inputs'
import { useAppDispatch } from 'src/ssr'
import useForm from 'src/hooks/useForm'
import { AddReplyFormProps } from './types'
import TextArea from 'components/textArea'
import styles from 'styles/base.scss'
import { addCommentAction } from 'src/core/ducks/forum/actions'

type AddReplyComponentFormProps = {
	isReply: boolean
	topicId: number
	commentId?: number
	authorId: number
	hideForm?: () => void
}

const AddReplyForm: FC<AddReplyComponentFormProps> = ({
	isReply,
	topicId,
	commentId = 0,
	authorId,
	hideForm
}) => {
	const dispatch = useAppDispatch()
	const authorName = 'var_user.login'
	const {
		values,
		handleChange,
		handleBlur,
		handleSubmit,
		isValid,
		formError,
		handleReset
	} = useForm<AddReplyFormProps>({
		initialState: {
			title: '',
			authorId,
			likeCount: 0,
			commentId,
			text: '',
			topicId
		},
		onSubmit: values => {
			if (!isValid) return
			dispatch(addCommentAction(values))
			handleReset()
			if (hideForm) {
				hideForm()
			}
		}
	})

	return (
		<div className={styles.replyFormWrap}>
			{isReply && <div>From: {authorName}</div>}
			<Form
				handleSubmit={handleSubmit}
				submitTitle={'Send'}
				errorText={formError}
			>
				<TextInput
					title={'Message Title'}
					type={'text'}
					name={'title'}
					value={values['title' as keyof AddReplyFormProps]}
					onChange={handleChange}
					onBlur={handleBlur}
					isRequired={false}
				/>
				<TextArea
					name={'text'}
					title={'Your text here...'}
					value={values['text' as keyof AddReplyFormProps]}
					onChange={handleChange}
					onBlur={handleBlur}
					validType={'text'}
				/>
			</Form>
		</div>
	)
}

export default AddReplyForm
