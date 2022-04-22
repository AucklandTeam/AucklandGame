import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.scss';
import HomePageWrap from '../../elements/HomePageWrap';

const menuItems = [
    { url: 'game', name: 'Start Game' },
    { url: 'sign-in', name: 'Sign In' },
    { url: 'profile', name: 'Profile' },
    { url: 'results', name: 'High-Scores' },
    { url: 'forum', name: 'Forum' },
];

const Main = () => (
    <HomePageWrap>
        <ul>
            {menuItems.map(item => {
                return (
                    <li
                        key={item.url}
                        className={styles.menuItem}
                    >
                        <Link to={item.url}>{item.name}</Link>
                    </li>
                );
            })}
        </ul>
    </HomePageWrap>
);

export default Main;
