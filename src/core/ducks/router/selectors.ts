import { State } from 'types/app'

export function getCurrentPathname(state: State) {
    return state.router.location.pathname
}
