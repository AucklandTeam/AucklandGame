import {SelectorResponse} from '@src/core/store/selectors';
import {LeaderBoardState} from '@src/components/pages/Results/types';
import {useSelector} from 'react-redux';

export const leaderBoardSelector:SelectorResponse<LeaderBoardState> = ({leaderBoard})=>leaderBoard;


export const useLeaderBordInfo = ()=>useSelector(leaderBoardSelector);
