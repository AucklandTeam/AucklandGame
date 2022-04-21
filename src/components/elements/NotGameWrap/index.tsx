import React, { FC } from 'react';
import styles from './NotGameWrap.scss';
import BottomMenu from '../BottomMenu/BottomMenu';
import BottomMenuItem from '../BottomMenuItem/BottomMenuItem';

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

const bottomMenuList = bottomMenuItems.map((item, index) => (
    <BottomMenuItem
        key={index}
        icon={item.icon}
        title={item.name}
        url={item.url}
    />
));

const NotGameWrap: FC<TemplatePageProps> = ({ titlePage, children }) => (
    <div className={styles.notGame}>
        <div className={styles.contentWrap}>
            <h3>{titlePage}</h3>
            {children}
            <BottomMenu>{bottomMenuList}</BottomMenu>
        </div>
    </div>
);

export default NotGameWrap;
