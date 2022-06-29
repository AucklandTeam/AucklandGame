import { useSelector } from 'react-redux'
import { SelectorResponse } from 'src/core/store/selectors'
import { LeaderBoardState } from './types'

export const leaderBoardSelector: SelectorResponse<LeaderBoardState> = ({ leaderBoard }) => leaderBoard

export const useLeaderBordInfo = () => useSelector(leaderBoardSelector)
