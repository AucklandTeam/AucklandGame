import { SelectorResponse, useAppSelector } from 'src/core/store/selectors'
import { UserState } from './types'

export const userSelector: SelectorResponse<UserState> = ({ user }) => user as UserState

export const useUserInfo: () => UserState = () => useAppSelector(userSelector)

export const useAuth = () => {
    const { status, data } = useUserInfo()
    return {
        isAuth: status === 'success' && !!data,
        isLoaded: status !== 'default',
    }
}
