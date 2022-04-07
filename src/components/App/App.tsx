import React from 'react';
import Heading1 from '../elements/Headings/Heading1';
import { Route, Link, HashRouter, Routes } from 'react-router-dom';
import Game from '../pages/Game/Game';
import Results from '../pages/Results/Results';
import Profile from '../pages/Profile/Profile';
import styles from './App.scss';
import Main from "../pages/Main/Main";

const App = () => {
    return (
        <div className={ styles.notGame }>
            <HashRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/game" element={<Game />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/results" element={<Results />} />
                    </Routes>
                </div>
            </HashRouter>
        </div>
    );
};
export default App;
