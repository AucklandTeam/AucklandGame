import {createBrowserHistory} from 'history';
import {useLayoutEffect, useState} from 'react';

const history = createBrowserHistory();

export const useInitHistory = ()=>{
    const [stateHistory, setState] = useState({
        action: history.action,
        location: history.location
    });

    useLayoutEffect(() => history.listen(setState), [history]);
    return {
        stateHistory
    };
};

export default history;
