import React from 'react';
import Heading1 from 'src/components/elements/Headings/Heading1';
import { Link } from 'react-router-dom';
import styles from './Main.scss';

const title = 'Destroy Asteroids';

const menuItems = [
    { url: 'game', name: 'Start Game' },
    { url: 'sign-in', name: 'Sign In / Sign Up' },
    { url: 'profile', name: 'Profile' },
    { url: 'results', name: 'High-Scores' },
    { url: 'forum', name: 'Forum' },
];

const menuList = menuItems.map( (item, index) => {
    return (
        <li
            key={index}
            className={styles.menuItem}
        >
            <Link to={item.url}>{item.name}</Link>
        </li>
    );
});

const Main = () => {
    return (
        <div className={styles.notGame}>
            <Heading1 headingTitle={title} />
            <nav className={styles.w100}>
                <ul className={styles.menuWrap}>{menuList}</ul>
            </nav>
        </div>
    );
};
export default Main;
