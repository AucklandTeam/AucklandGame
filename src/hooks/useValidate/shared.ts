import { ValTypes } from './types'

export const validationType: ValTypes = {
	login: {
		pattern: /^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/,
		error: '3-20 characters, latin, no spaces (use "-" or "_" instead)'
	},
	email: {
		pattern: /.+@[^@]+[a-z]+\.[^@]{2,}$/,
		error: 'Wrong e-mail format'
	},
	password: {
		pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
		error: '8-40 characters, at least one capital letter and one number'
	},
	notnull: {
		pattern: /(.|\s)*\S(.|\s)*/,
		error: 'Value is null'
	},
	text: {
		pattern: /(.|\s)*\S{3,}$/,
		error: 'Minimum 3 characters'
	}
}
