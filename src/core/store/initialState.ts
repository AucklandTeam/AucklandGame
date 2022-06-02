import { State } from 'types/app'
import {initialState as user} from 'src/core/ducks/auth/reducer'
import {initialState as leaderBoard} from 'src/core/ducks/scores/reducer'

export const getInitialState = (pathname: string = '/'): State => {
    return {
        user,
        leaderBoard,
        router: {
            location: { pathname, search: '', hash: '', key: '' },
            action: 'POP',
        }
    }
}
