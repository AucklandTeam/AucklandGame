import React from 'react';
import { Route, Link, HashRouter, Routes } from 'react-router-dom';
import Game from 'src/components/pages/Game/Game';
import Results from 'src/components/pages/Results/Results';
import Profile from 'src/components/pages/Profile/Profile';
import Main from "src/components/pages/Main/Main";
import Login from 'src/components/pages/Auth/Login';
import Forum from 'src/components/pages/Forum/Forum';
import styles from './App.scss';


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
                        <Route path="/sign-in" element={<Login />} />
                        <Route path="/forum" element={<Forum />} />
                    </Routes>
                </div>
            </HashRouter>
        </div>
    );
};
export default App;
