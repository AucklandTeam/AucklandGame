import React from 'react';
import Heading1 from '../elements/Headings/Heading1';
import { Route, Link, HashRouter, Routes } from 'react-router-dom';
import Game from '../pages/Game/Game';
import Results from '../pages/Results/Results';
import Profile from '../pages/Profile/Profile';
import './App.scss';

const title = 'Destroy Asteroids';

const App = () => {
    return (
        <div className={'not-game'}>
            <Heading1 headingTitle={ title } />
            <HashRouter>
                <nav className={'w-100'}>
                    <ul className={'content-wrap'}>
                        <li className={'menu-item'}><Link to="game">Game</Link></li>
                        <li className={'menu-item'}><Link to="sign-in">Sign In</Link></li>
                        <li className={'menu-item'}><Link to="profile">Profile</Link></li>
                        <li className={'menu-item'}><Link to="results">High-scores</Link></li>
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

