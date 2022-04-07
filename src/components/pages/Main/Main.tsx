import React from 'react';
import Heading1 from '../../elements/Headings/Heading1';
import { Link } from 'react-router-dom';
import styles from './Main.scss';

const title = 'Destroy Asteroids';

const Main = () => {
    return (
        <div className={ styles.notGame }>
            <Heading1 headingTitle = { title } />
                <nav className={ styles.w100 }>
                    <ul className={ styles.contentWrap }>
                        <li className={ styles.menuItem }>
                            <Link to="game">Game</Link>
                        </li>
                        <li className={ styles.menuItem }>
                            <Link to="sign-in">Sign In</Link>
                        </li>
                        <li className={ styles.menuItem }>
                            <Link to="profile">Profile</Link>
                        </li>
                        <li className={ styles.menuItem }>
                            <Link to="results">High-scores</Link>
                        </li>
                    </ul>
                </nav>
        </div>
    );
};
export default Main;
