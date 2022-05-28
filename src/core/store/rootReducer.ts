import {combineReducers} from 'redux';
import {userReducer} from 'src/components/pages/Auth/reducer';
import {leaderBoardReducer} from '@src/components/pages/Results/reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    leaderBoard: leaderBoardReducer,
});
