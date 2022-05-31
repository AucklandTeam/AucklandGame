import { createAction } from 'redux-actions'
import { ParamChangeAvatar, ParamEditUser } from './types'

export const editUser = createAction<ParamEditUser>('user/editUser')

export const changeAvatar = createAction<ParamChangeAvatar>('user/changeAvatar')
