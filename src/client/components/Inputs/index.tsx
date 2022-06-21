import React, { ChangeEvent, FC } from 'react'
import styles from 'styles/base.scss'

export interface TextInputProps<NAME> {
	title?: string
	id?: NAME,
	name: NAME
	type: HTMLInputElement['type']
	value?: string | number
	placeholder?: string
	isHide?: boolean
	validType?: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
	isRequired?: boolean
}

const TextInput: FC<TextInputProps<string>> = ({
	title,
	type,
	name,
	value,
	validType,
	onBlur,
	onChange,
	isRequired = true
}) => (
	<div className={styles.inputWrap}>
		<input
			id={name}
			type={type}
			name={name}
			title={title}
			value={value}
			data-vtype={validType}
			onBlur={onBlur}
			onChange={onChange}
			required={isRequired}
		/>
		<label htmlFor={name}>{title}</label>
	</div>
)

export default TextInput
