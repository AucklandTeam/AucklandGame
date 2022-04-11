import React, { FC } from 'react';
import styles from './NotGameWrap.scss';
import BottomMenu from "../BottomMenu/BottomMenu";
import BottomMenuItem from "../BottomMenuItem/BottomMenuItem";


const bottomMenuItems = [
    { icon: styles.asRocket, url: '/game', name: 'Return to Game' },
    { icon: styles.asTrophy, url: '/results', name: 'High-Scores' },
    { icon: styles.asPerson, url: '/profile', name: 'View Profile' },
    { icon: styles.asPerson, url: '/settings', name: 'Edit Profile' },
    { icon: styles.asRocket, url: '/forum', name: 'Forum' },
    { icon: styles.asPower, url: '/', name: 'Quit' },
];

const bottomMenuList = bottomMenuItems.map( (item, index) => {
    return (
        <BottomMenuItem key={index} icon={ item.icon } title={ item.name } url={ item.url } />
    );
});

const NotGameWrap: FC = ({ children}) => {
    return (
        <div className = { styles.notGame }>
            <div className = { styles.contentWrap }>
                { children }
                <BottomMenu children={ bottomMenuList }/>
            </div>
        </div>
    );
};

export default NotGameWrap;
