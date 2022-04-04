import React from 'react';
import { Route, Link, HashRouter, Routes } from 'react-router-dom';
import Game from '../Game/Game';
import Results from '../Results/Results';
import Profile from '../Profile/Profile';
import Login from '../Auth/Login';


const App = () => {
    return (
        <>
            <HashRouter>
                <nav>
                    <ul>
                        <li><Link to="game">Game</Link></li>
                        <li><Link to="sign-in">Sign In</Link></li>
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
                        <Route path="/sign-in" element={<Login />} />
                    </Routes>
                </div>
            </HashRouter>
        </>
    );
};
export default App;
