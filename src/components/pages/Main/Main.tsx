import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.scss';
import TemplatePage from '../../Template/TemplatePage';

const menuItems = [
    { url: 'game', name: 'Start Game' },
    { url: 'sign-in', name: 'Sign In' },
    { url: 'sign-up', name: 'Sign Up' },
    { url: 'profile', name: 'Profile' },
    { url: 'results', name: 'High-Scores' },
    { url: 'forum', name: 'Forum' }
];

const menuList = menuItems.map(item => {
    return (
        <li className={styles.menuItem} key={item.url}>
            <Link to={item.url}>{item.name}</Link>
        </li>
    );
});

const Main = () => {
    return (
        <TemplatePage>
            { menuList }
        </TemplatePage>
    );
};
export default Main;
