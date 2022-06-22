import React, { ChangeEvent, FC } from 'react'
import styles from 'styles/base.scss'
import {useTranslation} from 'react-i18next';

export interface TextInputProps<NAME> {
	title?: string
	id?: NAME
	name: NAME
	type: HTMLInputElement['type']
	value?: string | number
	placeholder?: string
	isHide?: boolean
	validType?: string
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
	isRequired?: boolean
	inputError?: string
}

const TextInput: FC<TextInputProps<string>> = ({
	title,
	type,
	name,
	value,
	validType,
	onBlur,
	onChange,
	isRequired = true,
	inputError
}) => {
	const { t } = useTranslation()
	return(
		<div className={styles.inputWrap}>
			<input
				id={name}
				type={type}
				name={name}
				title={t(title)}
				value={value}
				data-vtype={validType}
				onBlur={onBlur}
				onChange={onChange}
				required={isRequired}
				data-error={t(inputError)}
			/>
			<label htmlFor={name}>{t(title)}</label>
		</div>
	)
}

export default TextInput
