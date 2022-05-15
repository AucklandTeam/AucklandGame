import {combineReducers} from 'redux';
import {userReducer} from 'src/components/pages/Auth/reducer';

export const rootReducer = combineReducers({
    user: userReducer,
});
