import React, { ChangeEvent, FC } from 'react'
import styles from 'styles/base.scss'

export interface TextAreaProps<NAME> {
	title?: string
	name: NAME
	value?: string | number
	validType?: string
	onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
	onBlur?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea: FC<TextAreaProps<string>> = ({
	title,
	name,
	value,
	validType,
	onBlur,
	onChange
}) => (
	<div className={styles.inputWrap}>
		<textarea
			rows={8}
			name={name}
			title={title}
			value={value}
			data-vtype={validType}
			onBlur={onBlur}
			onChange={onChange}
			required
		/>
		<label htmlFor={name}>{title}</label>
	</div>
)

export default TextArea
