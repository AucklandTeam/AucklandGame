export type SuccessResponse = 'ОК'

export type ID = {
	id: number
}

export type User = {
	id: number
	first_name: string
	second_name: string
	display_name: string
	login: string
	email: string
	phone: string
	avatar: string
}

export type UpdateProfileData = {
	email: string
	login: string
	first_name: string
	second_name: string
	display_name: string
	phone: string
}

export type UpdatePasswordData = {
	oldPassword: string
	newPassword: string
}

export type LoadStatus = 'success' | 'pending' | 'failed' | 'default'

export type Nullable<T> = T | null

export type GenerateState<T> = {
	data: Nullable<T>
	status: LoadStatus
	error: string
}

export interface ActionWithPayload<ACTION, PAYLOAD> {
	type: ACTION
	payload: PAYLOAD
}

export type ParamForFormRequest = {
	setFormError?: (message: string) => void
}
