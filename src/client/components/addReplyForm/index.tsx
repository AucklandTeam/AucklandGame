import React, { FC } from 'react'
import Form from 'components/form'
import TextInput from 'components/Inputs'
import { useAppDispatch } from 'src/ssr'
import useForm from 'src/hooks/useForm'
import { AddReplyFormProps } from './types'
import TextArea from 'components/textArea'
import styles from 'styles/base.scss'
import { addCommentAction } from 'src/core/ducks/forum/actions'
import {useTranslation} from 'react-i18next';

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
	const { t } = useTranslation()
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
				submitTitle={t('send')}
				errorText={formError}
			>
				<TextInput
					title={t('messageTitle')}
					type={'text'}
					name={'title'}
					value={values['title' as keyof AddReplyFormProps]}
					onChange={handleChange}
					onBlur={handleBlur}
					isRequired={false}
				/>
				<TextArea
					name={'text'}
					title={t('textHere')}
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
