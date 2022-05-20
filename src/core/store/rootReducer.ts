import {combineReducers} from 'redux';
import {userReducer} from 'pages/Auth/reducer';

export const rootReducer = combineReducers({
    user: userReducer,
});
