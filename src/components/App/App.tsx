import React from 'react';
import Title from '../Title/Title';
import { Route, Link, HashRouter, Routes } from 'react-router-dom';
import Game from '../Game/Game';
import Results from '../Results/Results';
import Profile from '../Profile/Profile';

const title = 'Title here';

const App = () => {
    return (
        <>
            <HashRouter>
                <nav>
                    <ul>
                        <li><Link to="game">Game</Link></li>
                        <li><Link to="profile">Profile</Link></li>
                        <li><Link to="results">Statistic</Link></li>
                    </ul>
                </nav>
                <div>
                    <Routes>
                        <Route path="/game" element={<Game />} />
                        <Route path="/" element={<Game />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/results" element={<Results />} />
                    </Routes>
                </div>
            </HashRouter>
        </>
    );
};
export default App;
