import React, {FC, useCallback, useLayoutEffect} from 'react';
//import styles from './NotGameWrap.scss';
import BottomMenu from '../BottomMenu/BottomMenu';
import BottomMenuItem from '../BottomMenuItem/BottomMenuItem';
import {useAuth} from 'src/components/pages/Auth/selectors';
import history from 'src/core/history';
import {RouterPath} from 'src/shared/consts';
import {useAppDispatch} from 'src/index';
import {logout} from 'src/components/pages/Auth/actions';

type TemplatePageProps = {
    titlePage?: string;
};

const bottomMenuItems = [
    { icon: 'asRocket', url: '/game', name: 'Return to Game' },
    { icon: 'asTrophy', url: '/results', name: 'High-Scores' },
    { icon: 'asPerson', url: '/profile', name: 'View Profile' },
    { icon: 'asEdit', url: '/settings', name: 'Edit Profile' },
    { icon: 'asForum', url: '/forum', name: 'Forum' },
    { icon: 'asPower', url: '/', name: 'Quit' },
];

const NotGameWrap: FC<TemplatePageProps> = ({ titlePage, children }) => {
    const dispatch = useAppDispatch();
    const logoutHandler = useCallback(()=>{
        dispatch(logout());
    },[]);
    const {isAuth, isLoaded} = useAuth();
    useLayoutEffect(()=>{
        if(!isAuth && isLoaded){
            history.push(RouterPath.SignIn);
        }
    },[isAuth]);
    return (
        <div className="notGame">
            <div className="contentWrap">
                <h3>{titlePage}</h3>
                {children}
                <BottomMenu>
                    {bottomMenuItems.map(({name, url, icon}) =>
                        <BottomMenuItem
                            key={url}
                            icon={icon}
                            title={name}
                            url={url}
                            handler={ url === '/' ? logoutHandler : undefined}
                        />
                    )}</BottomMenu>
            </div>
        </div>
    );
};

export default NotGameWrap;
