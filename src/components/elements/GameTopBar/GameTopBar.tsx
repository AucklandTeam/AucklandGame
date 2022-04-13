import React from 'react';
import styles from './GameTopBar.scss';
import {Link} from 'react-router-dom';

interface BottomMenuItemType {
    icon: string;
    name: string;
    url: string;
}

const bottomMenuItems = [
    { icon: styles.asTrophy, url: '/results', name: ' High-Scores' },
    { icon: styles.asPerson, url: '/profile', name: ' View Profile' },
    { icon: styles.asEdit, url: '/settings', name: ' Edit Profile' },
    { icon: styles.asForum, url: '/forum', name: ' Forum' },
    { icon: styles.asPower, url: '/', name: ' Quit' },
];

const GameTopBar = ({restartGame}: any) => (
    <div className={styles.gameTopBar}>
        <div onClick={restartGame} className={styles.menuItem}>
            <i className={styles.asRocket} />
            <span> Restart</span>
        </div>
        {
            bottomMenuItems.map((item: BottomMenuItemType, index) =>
                <Link
                    to={item.url}
                    key={index}
                >
                    <i className={item.icon} />
                    <span>{item.name}</span>
                </Link>
            )
        }
    </div>
);

export default GameTopBar;
