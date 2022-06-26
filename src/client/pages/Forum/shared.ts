import { TextInputProps } from 'components/inputs'
import { CategoryTopic } from './types'

export const TextFieldsCategory: TextInputProps<keyof CategoryTopic>[] = [
	{
		name: 'label',
		type: 'text',
		title: 'addTitle',
		validType: 'text'
	}
]

export const initialState = {
	label: ''
}
