import { State } from 'types/app'
import { initialState as user } from 'src/core/ducks/auth/reducer'
import { initialState as leaderBoard } from 'src/core/ducks/scores/reducer'

export const getInitialState = (): State => {
	return {
		user,
		leaderBoard
	}
}
