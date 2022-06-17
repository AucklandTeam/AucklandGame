import { Patterns } from './types'
import styles from 'client/styles/base.scss'
import { validationType } from './shared'

const useValidate = (input: HTMLInputElement | HTMLTextAreaElement) => {
	const getValidationType = (
		element: HTMLInputElement | HTMLTextAreaElement
	): Patterns | undefined => {
		const type = element.dataset.vtype
		if (!type) return
		return validationType[type]
	}

	const validation = (
		element: HTMLInputElement | HTMLTextAreaElement
	): { passed: boolean; error: string } => {
		const validType = getValidationType(element)

		if (!validType) {
			throw new Error('No validation type')
		}

		return {
			passed: validType.pattern.test(element.value),
			error: validType.error
		}
	}

	const result = validation(input)
	const label = document.querySelector(`label[for='${input.name}']`)
	let errors = 'success'

	if (result.passed) {
		input.parentElement?.classList.remove(styles.error)
		label ? (label.textContent = input.title) : ''
	} else {
		input.parentElement?.classList.add(styles.error)
		label ? (label.textContent = result.error) : ''
		//errors[input.name] = result.error;
		errors = 'wrong'
	}
	return errors
}

export default useValidate
