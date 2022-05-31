import {
	SuccessResponse,
	UpdateProfileData,
	UpdatePasswordData
} from 'shared/types'
import { request } from 'src/api/request'
import { ENDPOINTS } from 'shared/consts'

export const userRequest = request<SuccessResponse, UpdateProfileData>({
	method: 'PUT',
	url: ENDPOINTS.USER.PROFILE
})
export const changeUserPasswordRequest = request<
	SuccessResponse,
	UpdatePasswordData
>({
	method: 'PUT',
	url: ENDPOINTS.USER.PASSWORD
})
export const changeAvatarRequest = request<SuccessResponse, FormData>({
	method: 'PUT',
	headers: { 'Content-Type': 'multipart/form-data' },
	url: ENDPOINTS.USER.AVATAR
})
