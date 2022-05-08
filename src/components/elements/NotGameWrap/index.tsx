import React, {FC, useCallback, useLayoutEffect} from 'react';
import styles from './NotGameWrap.scss';
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
    { icon: styles.asRocket, url: '/game', name: 'Return to Game' },
    { icon: styles.asTrophy, url: '/results', name: 'High-Scores' },
    { icon: styles.asPerson, url: '/profile', name: 'View Profile' },
    { icon: styles.asEdit, url: '/settings', name: 'Edit Profile' },
    { icon: styles.asForum, url: '/forum', name: 'Forum' },
    { icon: styles.asPower, url: '/', name: 'Quit' },
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
        <div className={styles.notGame}>
            <div className={styles.contentWrap}>
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
