import {createBrowserHistory, createMemoryHistory} from 'history';
import {useLayoutEffect, useState} from 'react';

export const IS_SERVER = !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
)

const history = IS_SERVER ? createMemoryHistory({ initialEntries: ['/'] }) : createBrowserHistory()


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
