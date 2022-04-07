import React from 'react';
import Heading1 from '../elements/Headings/Heading1';
import { Route, Link, HashRouter, Routes } from 'react-router-dom';
import Game from '../pages/Game/Game';
import Results from '../pages/Results/Results';
import Profile from '../pages/Profile/Profile';
import styles from './App.scss';
import Login from '../Auth/Login';

const title = 'Destroy Asteroids';

const App = () => {
    return (
        <div className={ styles.notGame }>
            <Heading1 headingTitle = { title } />
            <HashRouter>
                <nav className={ styles.w100 }>
                    <ul className={ styles.contentWrap }>
                        <li className={ styles.menuItem }>
                            <Link to="game">
                                <i className={ styles.asPower } />
                                Game
                            </Link>
                        </li>
                        <li className={ styles.menuItem }><Link to="sign-in">Sign In</Link></li>
                        <li className={ styles.menuItem }>
                            <Link to="profile">Profile</Link>
                        </li>
                        <li className={ styles.menuItem }>
                            <Link to="results">High-scores</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Routes>
                        <Route path="/game" element={<Game />} />
                        <Route path="/" element={<Game />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/results" element={<Results />} />
                        <Route path="/sign-in" element={<Login />} />
                    </Routes>
                </div>
            </HashRouter>
        </div>
    );
};
export default App;
